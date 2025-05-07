from rest_framework import serializers
from .models import Computador

class ComputadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computador
        fields = (
            'numero_de_patrimonio',
            'modelo_processador',
            'modelo_placa_mae',
            'modelo_placa_video',
            'memoria_ram',
            'armazenamento'
        )