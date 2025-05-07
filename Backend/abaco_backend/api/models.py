from django.db import models

class Computador(models.Model):
    
    numero_de_patrimonio = models.CharField(primary_key=True, unique=True)
    modelo_processador = models.CharField(max_length=100)
    modelo_placa_mae = models.CharField(max_length=100)
    modelo_placa_video = models.CharField(max_length=100)
    memoria_ram = models.CharField(max_length=100)
    armazenamento = models.CharField(max_length=100)

    def __str__(self):
        return self.name