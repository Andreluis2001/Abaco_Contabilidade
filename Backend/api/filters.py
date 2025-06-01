import django_filters
from api.models import Computador, Equipamento, Usuario

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
            'numero_de_patrimonio': ['icontains'],
            'modelo': ['icontains'],
            'localizacao': ['icontains'],
            'data_de_aquisicao': ['exact', 'year__gt', 'year__lt'],
            'modelo_processador': ['icontains'],
            'memoria_ram': ['icontains'],
            'modelo_hd': ['icontains'],
            'modelo_ssd': ['icontains'],
            'modelo_fonte': ['icontains'],
            'modelo_placa_mae': ['icontains'],
            'modelo_placa_video': ['icontains'],
        }

class EquipamentoFilter(django_filters.FilterSet):
    class Meta:
        model= Equipamento
        fields = {
            'numero_de_patrimonio': ['icontains'],
            'equipamento': ['icontains'],
            'modelo': ['icontains'],
            'localizacao': ['icontains'],
            'data_de_aquisicao': ['exact', 'year__gt', 'year__lt'],
        }