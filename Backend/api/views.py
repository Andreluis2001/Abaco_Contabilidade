from rest_framework import generics
from .models import  Computador, Equipamento, Manutencoes_Computadores, Manutencoes_Equipamentos, Usuario
from .serializers import ComputadorSerializer, EquipamentoSerializer, ManutencaoComputadorSerializer, ManutencaoEquipamentoSerializer, UsuarioSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from .filters import ComputadorFilter, EquipamentoFilter, ManutencaoComputadorFilter, ManutencaoEquipamentoFilter, UsuarioFilter

class UsuarioListView(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    filterset_class = UsuarioFilter

class UsuariosCreateView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [AllowAny]

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

class ManutencoesComputadoresListCreateView(generics.ListCreateAPIView):
    queryset = Manutencoes_Computadores.objects.all()
    serializer_class = ManutencaoComputadorSerializer
    filterset_class = ManutencaoComputadorFilter

class ManutencoesComputadoresDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manutencoes_Computadores.objects.all()
    serializer_class = ManutencaoComputadorSerializer

class ManutencoesEquipamentosListCreateView(generics.ListCreateAPIView):
    queryset = Manutencoes_Equipamentos.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer
    filterset_class = ManutencaoEquipamentoFilter

class ManutencaoEquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manutencoes_Equipamentos.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer
