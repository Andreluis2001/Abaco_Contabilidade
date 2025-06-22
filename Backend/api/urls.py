from django.urls import path
from .views import (ComputadorDetailView, ComputadorListView, EquipamentoDetailView, 
                    EquipamentoListCreateView, ManutencaoComputadorListCreateView, ManutencaoComputadorDetailView, ManutencaoEquipamentoListCreateView
                    , ManutencaoEquipamentoDetailView, ReturnAllManutencoesView, GetCountInstancesView, GetCountAllStatusView , ExportAllXLSXView, ExportComputadorXLSXView, ExportEquipamentoXLSXView, UsuarioDetailView, UsuarioListView, UsuariosCreateView, 
                    GetCurrentUsuarioView, ExportComputadorCSVView, ExportEquipamentoCSVView, ExportAllCSVView)

urlpatterns = [
    path('usuarios/', UsuarioListView.as_view(), name='usuario-list'),
    path('usuarios/create/', UsuariosCreateView.as_view()),    path('usuarios/<str:pk>/', UsuarioDetailView.as_view(), name='usuario-detail'),
    path('usuarios/current/', GetCurrentUsuarioView.as_view(), name='current-usuario'),
    path('computadores/', ComputadorListView.as_view(), name='computador-list-create'),
    path('computadores/<str:pk>/', ComputadorDetailView.as_view(), name='computador-detail'),
    path('equipamentos/', EquipamentoListCreateView.as_view(), name='equipamento-list-create'),
    path('equipamentos/<str:pk>/', EquipamentoDetailView.as_view(), name='equipamento-detail'),
    path('manutencao/computadores/', ManutencaoComputadorListCreateView.as_view(), name='manutencao-computador-list-create'),
    path('manutencao/computadores/<str:pk>/', ManutencaoComputadorDetailView.as_view(), name='manutencao-computador-detail'),
    path('manutencao/equipamentos/', ManutencaoEquipamentoListCreateView.as_view(), name='manutencao-equipamento-list-create'),
    path('manutencao/equipamentos/<str:pk>/', ManutencaoEquipamentoDetailView.as_view(), name='manutencao-equipamento-detail'),
    path('manutencao/todos/', ReturnAllManutencoesView.as_view(), name='return-all-manutencoes'),
    path('instances/count/', GetCountInstancesView.as_view(), name='get-count-instances'),
    path('status/count/', GetCountAllStatusView.as_view(), name='get-count-all-status'),
    path('export/computadores/csv/', ExportComputadorCSVView.as_view(), name='export-computador-csv'),
    path('export/equipamentos/csv/', ExportEquipamentoCSVView.as_view(), name='export-equipamento-csv'),
    path('export/tudo/csv/', ExportAllCSVView.as_view(), name='export-all-csv'),
    path('export/computadores/xlsx/', ExportComputadorXLSXView.as_view(), name='export-computador-xlsx'),
    path('export/equipamentos/xlsx/', ExportEquipamentoXLSXView.as_view(), name='export-equipamento-xslx'),
    path('export/tudo/xlsx/', ExportAllXLSXView.as_view(), name='export-all-xlsx'),
]