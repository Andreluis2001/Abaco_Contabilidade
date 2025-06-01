import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser


class Usuario(AbstractUser):
    class Roles(models.TextChoices):
        ADMIN = 'admin'
        TECNICO = 'tecnico'

    role = models.CharField(max_length=100, choices=Roles.choices, default=Roles.TECNICO)
    numero_de_telefone = models.CharField(max_length=50, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.set_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username
    

class Computador(models.Model):
    
    numero_de_patrimonio = models.CharField(primary_key=True, unique=True)
    modelo = models.CharField(max_length=100)
    data_de_aquisicao = models.DateField()
    localizacao = models.CharField(max_length=100)
    data_da_garantia = models.DateField(blank=True, null=True)
    modelo_processador = models.CharField(max_length=100, blank=True, null=True)
    memoria_ram = models.CharField(max_length=100, blank=True, null=True)
    modelo_hd = models.CharField(max_length=100, blank=True, null=True)
    modelo_ssd = models.CharField(max_length=100, blank=True, null=True)
    modelo_fonte = models.CharField(max_length=100, blank=True, null=True)
    modelo_placa_mae = models.CharField(max_length=100, blank=True, null=True)
    modelo_placa_video = models.CharField(max_length=100, blank=True, null=True)
    observacao = models.TextField(blank=True, null=True)


    def __str__(self):
        return self.numero_de_patrimonio
    
class Equipamento(models.Model):
    numero_de_patrimonio = models.CharField(primary_key=True, unique=True)
    equipamento = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100, blank=True, null=True)
    data_de_aquisicao = models.DateField()
    data_da_garantia = models.DateField(blank=True, null=True)
    localizacao = models.CharField(max_length=100)
    descricao = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.numero_de_patrimonio
    
