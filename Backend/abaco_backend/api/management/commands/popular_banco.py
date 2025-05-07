from django.core.management.base import BaseCommand
from api.models import Computador

class Command(BaseCommand):
    help = 'Popular a tabela de máquinas'

    def handle(slef, *args, **kwargs):

        computadores = [
            Computador(
            numero_de_patrimonio='123456',
            modelo_processador='Intel Core i7',
            modelo_placa_mae='ASUS ROG Strix',
            modelo_placa_video='NVIDIA GeForce RTX 3080',
            memoria_ram='32GB DDR4',
            armazenamento='1TB SSD'
            ),
            Computador(
            numero_de_patrimonio='123457',
            modelo_processador='Intel Core i5',
            modelo_placa_mae='Gigabyte Aorus',
            modelo_placa_video='NVIDIA GeForce GTX 1660',
            memoria_ram='16GB DDR4',
            armazenamento='512GB SSD'
            ),
            Computador(
            numero_de_patrimonio='123458',
            modelo_processador='AMD Ryzen 7',
            modelo_placa_mae='MSI B450',
            modelo_placa_video='AMD Radeon RX 6700 XT',
            memoria_ram='32GB DDR4',
            armazenamento='2TB HDD'
            ),
            Computador(
            numero_de_patrimonio='123459',
            modelo_processador='Intel Core i9',
            modelo_placa_mae='ASUS TUF Gaming',
            modelo_placa_video='NVIDIA GeForce RTX 3090',
            memoria_ram='64GB DDR4',
            armazenamento='2TB SSD'
            ),
            Computador(
            numero_de_patrimonio='123460',
            modelo_processador='AMD Ryzen 5',
            modelo_placa_mae='ASRock B550',
            modelo_placa_video='AMD Radeon RX 6600',
            memoria_ram='16GB DDR4',
            armazenamento='1TB HDD'
            ),
            Computador(
            numero_de_patrimonio='123461',
            modelo_processador='Intel Core i3',
            modelo_placa_mae='Gigabyte H410M',
            modelo_placa_video='Intel UHD Graphics 630',
            memoria_ram='8GB DDR4',
            armazenamento='256GB SSD'
            ),
            Computador(
            numero_de_patrimonio='123462',
            modelo_processador='AMD Ryzen 9',
            modelo_placa_mae='MSI X570',
            modelo_placa_video='NVIDIA GeForce RTX 3070',
            memoria_ram='64GB DDR4',
            armazenamento='1TB SSD'
            ),
            Computador(
            numero_de_patrimonio='123463',
            modelo_processador='Intel Core i5',
            modelo_placa_mae='ASUS Prime',
            modelo_placa_video='NVIDIA GeForce GTX 1050 Ti',
            memoria_ram='16GB DDR4',
            armazenamento='500GB SSD'
            ),
            Computador(
            numero_de_patrimonio='123464',
            modelo_processador='AMD Ryzen 3',
            modelo_placa_mae='Gigabyte A320M',
            modelo_placa_video='AMD Radeon Vega 8',
            memoria_ram='8GB DDR4',
            armazenamento='1TB HDD'
            ),
            Computador(
            numero_de_patrimonio='123465',
            modelo_processador='Intel Core i7',
            modelo_placa_mae='ASUS ROG Maximus',
            modelo_placa_video='NVIDIA GeForce RTX 2080',
            memoria_ram='32GB DDR4',
            armazenamento='1TB SSD'
            ),
            Computador(
            numero_de_patrimonio='123466',
            modelo_processador='AMD Ryzen 5',
            modelo_placa_mae='MSI B450M',
            modelo_placa_video='AMD Radeon RX 5500 XT',
            memoria_ram='16GB DDR4',
            armazenamento='512GB SSD'
            ),
            Computador(
            numero_de_patrimonio='123467',
            modelo_processador='Intel Core i9',
            modelo_placa_mae='Gigabyte Z590',
            modelo_placa_video='NVIDIA GeForce RTX 3060',
            memoria_ram='64GB DDR4',
            armazenamento='2TB SSD'
            ),
            Computador(
            numero_de_patrimonio='123468',
            modelo_processador='AMD Ryzen 7',
            modelo_placa_mae='ASRock X470',
            modelo_placa_video='AMD Radeon RX 6800',
            memoria_ram='32GB DDR4',
            armazenamento='1TB SSD'
            ),
            Computador(
            numero_de_patrimonio='123469',
            modelo_processador='Intel Core i3',
            modelo_placa_mae='ASUS Prime H310M',
            modelo_placa_video='Intel UHD Graphics 610',
            memoria_ram='8GB DDR4',
            armazenamento='256GB SSD'
            ),
            Computador(
            numero_de_patrimonio='123470',
            modelo_processador='AMD Ryzen 9',
            modelo_placa_mae='MSI MEG X570',
            modelo_placa_video='NVIDIA GeForce RTX 3080 Ti',
            memoria_ram='64GB DDR4',
            armazenamento='2TB SSD'
            ),
        ]

        Computador.objects.bulk_create(computadores)