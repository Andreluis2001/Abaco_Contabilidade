from django.urls import path
from .views import (ComputadorDetailView, ComputadorListView, EquipamentoDetailView, 
                    EquipamentoListCreateView, ExportAllXLSXView, ExportComputadorXLSXView, ExportEquipamentoXLSXView, UsuarioDetailView, UsuarioListView, UsuariosCreateView, 
                    ExportComputadorCSVView, ExportEquipamentoCSVView, ExportAllCSVView)

urlpatterns = [
    path('usuarios/', UsuarioListView.as_view(), name='usuario-list'),
    path('usuarios/create', UsuariosCreateView.as_view()),    path('usuarios/<str:pk>/', UsuarioDetailView.as_view(), name='usuario-detail'),
    path('computadores/', ComputadorListView.as_view(), name='computador-list-create'),
    path('computadores/<str:pk>/', ComputadorDetailView.as_view(), name='computador-detail'),
    path('equipamentos/', EquipamentoListCreateView.as_view(), name='equipamento-list-create'),
    path('equipamentos/<str:pk>/', EquipamentoDetailView.as_view(), name='equipamento-detail'),
    path('export/computadores/csv/', ExportComputadorCSVView.as_view(), name='export-computador-csv'),
    path('export/equipamentos/csv/', ExportEquipamentoCSVView.as_view(), name='export-equipamento-csv'),
    path('export/tudo/csv/', ExportAllCSVView.as_view(), name='export-all-csv'),
    path('export/computadores/xlsx/', ExportComputadorXLSXView.as_view(), name='export-computador-xlsx'),
    path('export/equipamentos/xlsx/', ExportEquipamentoXLSXView.as_view(), name='export-equipamento-xslx'),
    path('export/tudo/xlsx/', ExportAllXLSXView.as_view(), name='export-all-xlsx'),
]