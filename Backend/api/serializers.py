from rest_framework import serializers
from .models import Computador, Equipamento, Usuario


class UsuarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Usuario
        fields = ["username", "password", "role", "email", "numero_de_telefone"]
        extra_kwargs = {"password": {"write_only": True}}

        
class ComputadorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Computador
        fields = [
            "numero_de_patrimonio", "modelo", "data_de_aquisicao", "localizacao",
            "data_da_garantia", "modelo_processador", "memoria_ram", "modelo_hd",
            "modelo_ssd", "modelo_fonte", "modelo_placa_mae", "modelo_placa_video",
            "observacao"
        ]

class EquipamentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Equipamento
        fields = [
            "numero_de_patrimonio", "equipamento", "modelo", "data_de_aquisicao",
            "data_da_garantia", "localizacao", "descricao"
        ]
    
        
