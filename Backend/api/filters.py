import django_filters
from api.models import Computador, Equipamento, Manutencoes_Computadores, Manutencoes_Equipamentos, Usuario

class UsuarioFilter(django_filters.FilterSet):
    class Meta:
        model = Usuario
        fields = {
            'username': ['icontains'],
            'email': ['icontains'],
            'first_name': ['icontains'],
            'last_name': ['icontains'],
            'role': ['exact'],
            'numero_de_telefone': ['icontains'],
        }

class ComputadorFilter(django_filters.FilterSet):
    class Meta:
        model = Computador
        fields = {
            'modelo_processador': ['icontains'],
            'modelo_placa_mae': ['icontains'],
            'modelo_placa_video': ['icontains'],
            'memoria_ram': ['icontains'],
            'armazenamento': ['icontains'],
            'modelo_fonte': ['icontains'],
            'modelo_gabinete': ['icontains'],
            'modelo_hd': ['icontains'],
            'localizacao': ['icontains'],
            'data_aquisicao': ['exact', 'year__gt', 'year__lt'],
        }

class EquipamentoFilter(django_filters.FilterSet):
    class Meta:
        model = Equipamento
        fields = {
            'numero_de_patrimonio': ['icontains'],
            'modelo': ['icontains'],
            'localizacao': ['icontains'],
            'data_aquisicao': ['exact', 'year__gt', 'year__lt'],
            'tipo': ['icontains'],
        }

class ManutencaoComputadorFilter(django_filters.FilterSet):
    class Meta:
        model = Manutencoes_Computadores
        fields = {
            'data_manutencao': ['exact', 'year__gt', 'year__lt'],
            'descricao': ['icontains'],
        }

class ManutencaoEquipamentoFilter(django_filters.FilterSet):
    class Meta:
        model = Manutencoes_Equipamentos
        fields = {
            'data_manutencao': ['exact', 'year__gt', 'year__lt'],
            'descricao': ['icontains'],
        }
