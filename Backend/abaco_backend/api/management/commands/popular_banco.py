from django.core.management.base import BaseCommand
from api.models import Computador

class Command(BaseCommand):
    help = 'Popular a tabela de máquinas'

    def handle(slef, *args, **kwargs):

        computadores = [
            Computador(numero_de_patrimonio='123456', modelo_processador='Intel Core i7', modelo_placa_mae='Asus ROG Strix', modelo_placa_video='NVIDIA GeForce RTX 3080', memoria_ram='32GB', armazenamento='1TB SSD'),
            Computador(numero_de_patrimonio='123457', modelo_processador='Intel Core i5', modelo_placa_mae='Gigabyte Aorus', modelo_placa_video='NVIDIA GeForce GTX 1660', memoria_ram='16GB', armazenamento='512GB SSD'),
            Computador(numero_de_patrimonio='123458', modelo_processador='AMD Ryzen 7', modelo_placa_mae='MSI MPG', modelo_placa_video='AMD Radeon RX 6700 XT', memoria_ram='32GB', armazenamento='1TB HDD'),
            Computador(numero_de_patrimonio='123459', modelo_processador='Intel Core i9', modelo_placa_mae='Asus TUF Gaming', modelo_placa_video='NVIDIA GeForce RTX 3090', memoria_ram='64GB', armazenamento='2TB SSD'),
            Computador(numero_de_patrimonio='123460', modelo_processador='AMD Ryzen 5', modelo_placa_mae='ASRock Phantom', modelo_placa_video='AMD Radeon RX 6600', memoria_ram='16GB', armazenamento='1TB SSD'),
            Computador(numero_de_patrimonio='123461', modelo_processador='Intel Core i3', modelo_placa_mae='Gigabyte Ultra Durable', modelo_placa_video='Intel UHD Graphics 630', memoria_ram='8GB', armazenamento='256GB SSD'),
            Computador(numero_de_patrimonio='123462', modelo_processador='AMD Ryzen 9', modelo_placa_mae='MSI MAG', modelo_placa_video='NVIDIA GeForce RTX 3070', memoria_ram='64GB', armazenamento='2TB HDD'),
            Computador(numero_de_patrimonio='123463', modelo_processador='Intel Core i7', modelo_placa_mae='Asus Prime', modelo_placa_video='NVIDIA GeForce GTX 1650', memoria_ram='16GB', armazenamento='512GB SSD'),
            Computador(numero_de_patrimonio='123464', modelo_processador='AMD Ryzen 3', modelo_placa_mae='Gigabyte Gaming', modelo_placa_video='AMD Radeon RX 550', memoria_ram='8GB', armazenamento='1TB HDD'),
            Computador(numero_de_patrimonio='123465', modelo_processador='Intel Core i5', modelo_placa_mae='MSI Pro', modelo_placa_video='NVIDIA GeForce GTX 1050 Ti', memoria_ram='16GB', armazenamento='512GB SSD'),
            Computador(numero_de_patrimonio='123466', modelo_processador='AMD Ryzen 7', modelo_placa_mae='ASRock Steel Legend', modelo_placa_video='AMD Radeon RX 6800', memoria_ram='32GB', armazenamento='1TB SSD'),
            Computador(numero_de_patrimonio='123467', modelo_processador='Intel Core i9', modelo_placa_mae='Asus ROG Maximus', modelo_placa_video='NVIDIA GeForce RTX 3080 Ti', memoria_ram='64GB', armazenamento='2TB SSD'),
            Computador(numero_de_patrimonio='123468', modelo_processador='AMD Ryzen 5', modelo_placa_mae='Gigabyte Aorus Elite', modelo_placa_video='AMD Radeon RX 5700 XT', memoria_ram='16GB', armazenamento='1TB HDD'),
            Computador(numero_de_patrimonio='123469', modelo_processador='Intel Core i3', modelo_placa_mae='MSI B450', modelo_placa_video='Intel UHD Graphics 610', memoria_ram='8GB', armazenamento='256GB SSD'),
            Computador(numero_de_patrimonio='123470', modelo_processador='AMD Ryzen 9', modelo_placa_mae='ASRock Taichi', modelo_placa_video='NVIDIA GeForce RTX 3060', memoria_ram='64GB', armazenamento='2TB HDD'),
        ]

        Computador.objects.bulk_create(computadores)