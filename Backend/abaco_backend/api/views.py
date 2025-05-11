from rest_framework import generics
from .models import  Computador, Equipamento, Manutencoes_Computadores, Manutencoes_Equipamentos
from .serializers import ComputadorSerializer, EquipamentoSerializer, ManutencaoComputadorSerializer, ManutencaoEquipamentoSerializer

class ComputadorListCreateView(generics.ListCreateAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer

class ComputadorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer

class EquipamentoListCreateView(generics.ListCreateAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer

class EquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer

class ManutencoesComputadoresListCreateView(generics.ListCreateAPIView):
    queryset = Manutencoes_Computadores.objects.all()
    serializer_class = ManutencaoComputadorSerializer

class ManutencoesComputadoresDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manutencoes_Computadores.objects.all()
    serializer_class = ManutencaoComputadorSerializer

class ManutencoesEquipamentosListCreateView(generics.ListCreateAPIView):
    queryset = Manutencoes_Equipamentos.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer

class ManutencaoEquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manutencoes_Equipamentos.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer
