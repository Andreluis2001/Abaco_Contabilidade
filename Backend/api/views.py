from rest_framework import generics
from .models import  Computador, Equipamento, Usuario
from .serializers import ComputadorSerializer, EquipamentoSerializer, UsuarioSerializer
from .filters import ComputadorFilter, EquipamentoFilter, UsuarioFilter
from django.views import View
from django.http import HttpResponse
import csv

class UsuarioListView(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    filterset_class = UsuarioFilter

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
    
class ComputadorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer

class EquipamentoListCreateView(generics.ListCreateAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer
    filterset_class = EquipamentoFilter

class EquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer

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
class ExportAllCSVView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="all_data.csv"'

        writer = csv.writer(response)
        
        computador_headers = Computador._meta.get_fields()

        headers = [
            field.name for field in computador_headers
        ]

        headers = ['Tipo'] + headers

        writer.writerow(headers)

        computadores = Computador.objects.all()
        for computador in computadores:
            writer.writerow([
                'Computador',
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
                computador.descricao
            ])

        equipamentos = Equipamento.objects.all()
        for equipamento in equipamentos:
            writer.writerow([
                'Equipamento',
                equipamento.numero_de_patrimonio,
                equipamento.equipamento,
                equipamento.data_de_aquisicao,
                equipamento.localizacao,
                equipamento.data_da_garantia,
                '',  # Modelo Processador
                '',  # Memoria RAM
                '',  # Modelo HD
                '',  # Modelo SSD
                '',  # Modelo Fonte
                '',  # Modelo Placa Mãe
                '',  # Modelo Placa de Vídeo
                equipamento.descricao
            ])

        return response
