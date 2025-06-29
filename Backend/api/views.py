from rest_framework import generics, filters
from .models import  Computador, Equipamento, ManutencaoComputador, ManutencaoEquipamento, Usuario
from .serializers import ComputadorSerializer, EquipamentoSerializer, UsuarioSerializer, ManutencaoComputadorSerializer, ManutencaoEquipamentoSerializer
from .filters import ComputadorFilter, EquipamentoFilter
from django.views import View
from django.http import HttpResponse, JsonResponse
from django.db.models import Count
import csv
import pandas as pd

class UsuarioListView(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuariosCreateView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class ComputadorListView(generics.ListCreateAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer
    filterset_class = ComputadorFilter
    filter_backends = [filters.SearchFilter]
    search_fields = ['=numero_de_patrimonio', 'modelo', 'localizacao']
    
class ComputadorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer

class EquipamentoListCreateView(generics.ListCreateAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer
    filterset_class = EquipamentoFilter
    filter_backends = [filters.SearchFilter]
    search_fields = ['=numero_de_patrimonio', 'equipamento', 'localizacao']

class EquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer

class ManutencaoComputadorListCreateView(generics.ListCreateAPIView):
    queryset = ManutencaoComputador.objects.all()
    serializer_class = ManutencaoComputadorSerializer

class ManutencaoComputadorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ManutencaoComputador.objects.all()
    serializer_class = ManutencaoComputadorSerializer

class ManutencaoEquipamentoListCreateView(generics.ListCreateAPIView):
    queryset = ManutencaoEquipamento.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer
    
class ManutencaoEquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ManutencaoEquipamento.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer

class ReturnAllManutencoesView(View):
    def get(self, request, *args, **kwargs):

        manutencoes_computadores = ManutencaoComputador.objects.all().order_by('-data')[:4]
        manutencoes_equipamentos = ManutencaoEquipamento.objects.all().order_by('-data')[:4]

        data = list(manutencoes_computadores.values()) + list(manutencoes_equipamentos.values())
        sorted_data = sorted(data, key=lambda x: x['data'], reverse=True)[:4]

        return JsonResponse(sorted_data, safe=False)
    
class GetCountInstancesView(View):
    def get(self, request, *args, **kwargs):
        computador_count = Computador.objects.count()
        equipamento_count = Equipamento.objects.values('equipamento').annotate(count=Count('equipamento'))

        data = {
            'computador_count': computador_count,
            'equipamento_count': {item['equipamento']: item['count'] for item in equipamento_count}
        }

        return JsonResponse(data)
    
class GetCountAllStatusView(View):
    def get(self, request, *args, **kwargs):
        computador_status_count = Computador.objects.values('computador_status').annotate(count=Count('computador_status'))
        equipamento_status_count = Equipamento.objects.values('equipamento_status').annotate(count=Count('equipamento_status'))

        computador_ativo_count = sum(item['count'] for item in computador_status_count if item['computador_status'] == 'Ativo')
        computador_manutencao_count = sum(item['count'] for item in computador_status_count if item['computador_status'] == 'Manutencao')
        computador_desativado_count = sum(item['count'] for item in computador_status_count if item['computador_status'] == 'Desativado')

        equipamento_ativo_count = sum(item['count'] for item in equipamento_status_count if item['equipamento_status'] == 'Ativo')
        equipamento_manutencao_count = sum(item['count'] for item in equipamento_status_count if item['equipamento_status'] == 'Manutencao')
        equipamento_desativado_count = sum(item['count'] for item in equipamento_status_count if item['equipamento_status'] == 'Desativado')

        total_ativos = computador_ativo_count + equipamento_ativo_count
        total_manutencao = computador_manutencao_count + equipamento_manutencao_count
        total_desativados = computador_desativado_count + equipamento_desativado_count
        data = {
            'total_ativos': total_ativos,
            'total_manutencao': total_manutencao,
            'total_desativados': total_desativados
        }

        return JsonResponse(data)

class ExportComputadorCSVView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="computadores.csv"'

        writer = csv.writer(response)
        unformatted_headers = Computador._meta.get_fields()
        headers = [field.name for field in unformatted_headers]
        writer.writerow(headers)

        computadores = Computador.objects.all()
        for computador in computadores:
            writer.writerow([
                computador.numero_de_patrimonio,
                computador.modelo,
                computador.data_de_aquisicao,
                computador.localizacao,
                computador.data_da_garantia,
                computador.modelo_processador,
                computador.memoria_ram,
                computador.modelo_hd,
                computador.modelo_ssd,
                computador.modelo_fonte,
                computador.modelo_placa_mae,
                computador.modelo_placa_video,
                computador.descricao,
            ])

        return response
    
class ExportComputadorXLSXView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="computadores.xlsx"'

        computadores = Computador.objects.all()

        df = pd.DataFrame(list(computadores.values()))
        df.to_excel(response, index=False, sheet_name='Computadores')

        return response
    
class ExportEquipamentoCSVView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="equipamentos.csv"'

        writer = csv.writer(response)
        unformatted_headers = Equipamento._meta.get_fields()
        headers = [field.name for field in unformatted_headers]
        writer.writerow(headers)

        equipamentos = Equipamento.objects.all()
        for equipamento in equipamentos:
            writer.writerow([
                equipamento.numero_de_patrimonio,
                equipamento.equipamento,
                equipamento.modelo,
                equipamento.data_de_aquisicao,
                equipamento.data_da_garantia,
                equipamento.localizacao,
                equipamento.descricao,
            ])

        return response  
    
class ExportEquipamentoXLSXView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="equipamentos.xlsx"'

        equipamentos = Equipamento.objects.all()

        df = pd.DataFrame(list(equipamentos.values()))
        df.to_excel(response, index=False, sheet_name='Equipamentos')

        return response
    
    
class ExportManutencaoComputadorCSVView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="manutencao_computadores.csv"'

        writer = csv.writer(response)
        unformatted_headers = ManutencaoComputador._meta.get_fields()
        headers = [field.name for field in unformatted_headers]
        writer.writerow(headers)

        manutencoes = ManutencaoComputador.objects.all()
        for manutencao in manutencoes:
            writer.writerow([
                manutencao.computador.numero_de_patrimonio,
                manutencao.data,
                manutencao.descricao,
                manutencao.usuario.username,
            ])

        return response

class ExportManutencaoComputadorXLSXView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="manutencao_computadores.xlsx"'

        manutencoes = ManutencaoComputador.objects.all()

        df = pd.DataFrame(list(manutencoes.values()))
        df.to_excel(response, index=False, sheet_name='Manutencao Computadores')

        return response
    
class ExportManutencaoEquipamentoCSVView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="manutencao_equipamentos.csv"'

        writer = csv.writer(response)
        unformatted_headers = ManutencaoEquipamento._meta.get_fields()
        headers = [field.name for field in unformatted_headers]
        writer.writerow(headers)

        manutencoes = ManutencaoEquipamento.objects.all()
        for manutencao in manutencoes:
            writer.writerow([
                manutencao.equipamento.numero_de_patrimonio,
                manutencao.data,
                manutencao.descricao,
                manutencao.usuario.username,
            ])

        return response

class ExportManutencaoEquipamentoXLSXView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="manutencao_equipamentos.xlsx"'

        manutencoes = ManutencaoEquipamento.objects.all()

        df = pd.DataFrame(list(manutencoes.values()))
        df.to_excel(response, index=False, sheet_name='Manutencao Equipamentos')

        return response
