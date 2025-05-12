from django.urls import path
from .views import ComputadorDetailView, ComputadorListView, EquipamentoDetailView, EquipamentoListView, ManutencaoEquipamentoDetailView, ManutencoesComputadoresDetailView, ManutencoesComputadoresListCreateView, ManutencoesEquipamentosListCreateView

urlpatterns = [
    path('computadores/', ComputadorListView.as_view(), name='computador-list-create'),
    path('computadores/<str:pk>/', ComputadorDetailView.as_view(), name='computador-detail'),
    path('equipamentos/', EquipamentoListView.as_view(), name='equipamento-list-create'),
    path('equipamentos/<str:pk>/', EquipamentoDetailView.as_view(), name='equipamento-detail'),
    path('manutencao/computadores/', ManutencoesComputadoresListCreateView.as_view(), name='manutencao-computador-list-create'),
    path('manutencao/computadores/<str:pk>/', ManutencoesComputadoresDetailView.as_view(), name='manutencao-computador-detail'),
    path('manutencao/equipamentos/', ManutencoesEquipamentosListCreateView.as_view(), name='manutencao-equipamento-list-create'),
    path('manutencao/equipamentos/<str:pk>/', ManutencaoEquipamentoDetailView.as_view(), name='manutencao-equipamento-detail'),
]