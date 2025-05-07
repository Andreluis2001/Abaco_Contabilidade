from django.urls import path
from .views import ComputadorListCreateView

urlpatterns = [
    path('computadores/', ComputadorListCreateView.as_view(), name='computador-list-create'),
]