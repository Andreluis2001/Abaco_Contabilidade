from django.db import models

class Computador(models.Model):
    
    numero_de_patrimonio = models.CharField(primary_key=True, unique=True)
    modelo_processador = models.CharField(max_length=100)
    modelo_placa_mae = models.CharField(max_length=100)
    modelo_placa_video = models.CharField(max_length=100)
    memoria_ram = models.CharField(max_length=100)
    armazenamento = models.CharField(max_length=100)
    modelo_fonte = models.CharField(max_length=100)
    modelo_gabinete = models.CharField(max_length=100)
    modelo_hd = models.CharField(max_length=100)
    localizacao = models.CharField(max_length=100)
    data_aquisicao = models.DateField()
    data_ultima_atualizacao = models.DateField(auto_now=True)

    def __str__(self):
        return self.numero_de_patrimonio
    
class Equipamento(models.Model):
    numero_de_patrimonio = models.CharField(primary_key=True, unique=True)
    modelo = models.CharField(max_length=100)
    localizacao = models.CharField(max_length=100)
    data_aquisicao = models.DateField()
    tipo = models.CharField(max_length=100)

    def __str__(self):
        return self.numero_de_patrimonio
    
class Manutencoes_Computadores(models.Model):
    id = models.AutoField(primary_key=True)
    Computador = models.ForeignKey(Computador, related_name='manutencoes',on_delete=models.CASCADE)
    data_manutencao = models.DateField()
    descricao = models.TextField()

    def __str__(self):
        return f"{self.Computador} - {self.descricao}"
    
class Manutencoes_Equipamentos(models.Model):
    id = models.AutoField(primary_key=True)
    Equipamento = models.ForeignKey(Equipamento, related_name='manutencoes' ,on_delete=models.CASCADE)
    data_manutencao = models.DateField()
    descricao = models.TextField()

    def __str__(self):
        return f"{self.Equipamento} - {self.data_manutencao}"
    
