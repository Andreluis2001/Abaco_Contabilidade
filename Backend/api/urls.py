from django.urls import path
from .views import (ComputadorDetailView, ComputadorListView, EquipamentoDetailView, 
                    EquipamentoListCreateView, UsuarioDetailView, UsuarioListView, UsuariosCreateView)

urlpatterns = [
    path('usuarios/', UsuarioListView.as_view(), name='usuario-list'),
    path('usuarios/create', UsuariosCreateView.as_view()),    path('usuarios/<str:pk>/', UsuarioDetailView.as_view(), name='usuario-detail'),
    path('computadores/', ComputadorListView.as_view(), name='computador-list-create'),
    path('computadores/<str:pk>/', ComputadorDetailView.as_view(), name='computador-detail'),
    path('equipamentos/', EquipamentoListCreateView.as_view(), name='equipamento-list-create'),
    path('equipamentos/<str:pk>/', EquipamentoDetailView.as_view(), name='equipamento-detail'),
]