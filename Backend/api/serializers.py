from rest_framework import serializers
from .models import Computador, Equipamento, Usuario, ManutencaoComputador, ManutencaoEquipamento

class ManutencaoComputadorSerializer(serializers.ModelSerializer):

    class Meta:
        model = ManutencaoComputador
        fields = [
            "computador", "data_inicio", "data_fim", "descricao", "status"
        ]

class ManutencaoEquipamentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ManutencaoEquipamento
        fields = [
            "equipamento", "data_inicio", "data_fim", "descricao", "status"
        ]
        
class ComputadorSerializer(serializers.ModelSerializer):
    
    manutencoes = ManutencaoComputadorSerializer(many=True, read_only=True)

    class Meta:
        model = Computador
        fields = [
            "numero_de_patrimonio", "modelo", "data_de_aquisicao", "localizacao",
            "data_da_garantia", "computador_status","modelo_processador", "memoria_ram", "modelo_hd",
            "modelo_ssd", "modelo_fonte", "modelo_placa_mae", "modelo_placa_video",
            "descricao", "manutencoes"
        ]

class EquipamentoSerializer(serializers.ModelSerializer):

    manutencoes = ManutencaoEquipamentoSerializer(many=True, read_only=True)

    class Meta:
        model = Equipamento
        fields = [
            "numero_de_patrimonio", "equipamento", "modelo", "data_de_aquisicao",
            "data_da_garantia", "localizacao", "equipameto_status", "descricao", "manutencoes"
        ]

class UsuarioSerializer(serializers.ModelSerializer):

    manutencoes_computador = ManutencaoComputadorSerializer(many=True, read_only=True)
    manutencoes_equipamento = ManutencaoEquipamentoSerializer(many=True, read_only=True)

    class Meta:
        model = Usuario
        fields = ["username", "password", "role", "email", "numero_de_telefone", "manutencoes_computador", "manutencoes_equipamento"]
        extra_kwargs = {"password": {"write_only": True}}