from rest_framework import generics
from .models import  Computador, Equipamento, Manutencoes_Computadores, Manutencoes_Equipamentos, Usuario
from .serializers import ComputadorSerializer, EquipamentoSerializer, ManutencaoComputadorSerializer, ManutencaoEquipamentoSerializer, UsuarioSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

class UsuarioListView(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [AllowAny]
class UsuariosCreateView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [AllowAny]

class UsuarioDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [AllowAny]

class ComputadorListView(generics.ListCreateAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer
    permission_classes = [AllowAny]
class ComputadorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer
    permission_classes = [AllowAny]

class EquipamentoListView(generics.ListCreateAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer
    permission_classes = [AllowAny]

class EquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Equipamento.objects.all()
    serializer_class = EquipamentoSerializer
    permission_classes = [AllowAny]

class ManutencoesComputadoresListCreateView(generics.ListCreateAPIView):
    queryset = Manutencoes_Computadores.objects.all()
    serializer_class = ManutencaoComputadorSerializer
    permission_classes = [AllowAny]

class ManutencoesComputadoresDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manutencoes_Computadores.objects.all()
    serializer_class = ManutencaoComputadorSerializer
    permission_classes = [AllowAny]

class ManutencoesEquipamentosListCreateView(generics.ListCreateAPIView):
    queryset = Manutencoes_Equipamentos.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer
    permission_classes = [AllowAny]

class ManutencaoEquipamentoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manutencoes_Equipamentos.objects.all()
    serializer_class = ManutencaoEquipamentoSerializer
    permission_classes = [AllowAny]
