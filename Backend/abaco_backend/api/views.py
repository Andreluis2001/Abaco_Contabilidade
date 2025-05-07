from rest_framework import generics
from .models import  Computador
from .serializers import ComputadorSerializer

class ComputadorListCreateView(generics.ListCreateAPIView):
    queryset = Computador.objects.all()
    serializer_class = ComputadorSerializer
