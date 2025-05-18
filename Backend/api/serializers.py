from rest_framework import serializers
from .models import Computador, Equipamento, Manutencoes_Computadores, Manutencoes_Equipamentos, Usuario


class UsuarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Usuario
        fields = ["username", "password", "role", "email", "numero_de_telefone"]
        extra_kwargs = {"password": {"write_only": True}}

        
class ManutencaoComputadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manutencoes_Computadores
        fields = ["id", "Computador", "data_manutencao", "descricao"]

class ComputadorSerializer(serializers.ModelSerializer):

    manutencoes = ManutencaoComputadorSerializer(many=True, read_only=True)
    class Meta:
        model = Computador
        fields = ["numero_de_patrimonio", "modelo_processador", 
                  "modelo_placa_mae", "modelo_placa_video", "memoria_ram", 
                  "armazenamento", "modelo_fonte", "modelo_gabinete", "modelo_hd", 
                  "localizacao", "data_aquisicao", "data_ultima_atualizacao", "manutencoes"]
        
class ManutencaoEquipamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manutencoes_Equipamentos
        fields = ["id", "Equipamento", "data_manutencao", "descricao"]
        
class EquipamentoSerializer(serializers.ModelSerializer):
    manutencoes = ManutencaoEquipamentoSerializer(many=True, read_only=True)
    class Meta:
        model = Equipamento
        fields = ["numero_de_patrimonio", "modelo", "localizacao", 
                  "data_aquisicao", "tipo", "manutencoes"]
        
        

