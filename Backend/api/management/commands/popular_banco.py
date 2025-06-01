from django.core.management.base import BaseCommand
from api.models import Computador, Equipamento, Usuario

class Command(BaseCommand):
    help = 'Popular a tabela de máquinas'

    def handle(self, *args, **kwargs):

        computadores = [
            Computador(
                numero_de_patrimonio="PC001",
                modelo="Dell OptiPlex 7080",
                data_de_aquisicao="2022-01-15",
                localizacao="Sala 101",
                data_da_garantia="2023-01-15",
                modelo_processador="Intel Core i5",
                memoria_ram="16GB",
                modelo_hd="1TB HDD",
                modelo_ssd="512GB SSD",
                modelo_fonte="Dell 240W",
                modelo_placa_mae="Dell Motherboard",
                modelo_placa_video="NVIDIA GTX 1650",
                observacao="Computador principal da sala"
            ),
            Computador(
                numero_de_patrimonio="PC002",
                modelo="HP ProDesk 400 G6",
                data_de_aquisicao="2022-02-20",
                localizacao="Sala 102",
                data_da_garantia="2023-02-20",
                modelo_processador="Intel Core i5",
                memoria_ram="8GB",
                modelo_hd="500GB HDD",
                modelo_ssd=None,
                modelo_fonte=None,
                modelo_placa_mae=None,
                modelo_placa_video=None,
                observacao=""
            )
        ]

        equipamentos = [
            Equipamento(
                numero_de_patrimonio="EQ001",
                equipamento="Projetor Epson",
                modelo="Epson EB-X41",
                data_de_aquisicao="2021-05-10",
                data_da_garantia="2022-05-10",
                localizacao="Sala de Reuniões",
                descricao="Projetor para apresentações"
            ),
            Equipamento(
                numero_de_patrimonio="EQ002",
                equipamento="Impressora HP LaserJet",
                modelo="HP LaserJet Pro M404dn",
                data_de_aquisicao="2021-06-15",
                data_da_garantia="2022-06-15",
                localizacao="Sala 103",
                descricao="Impressora a laser para documentos"
            )
        ]

        

        Computador.objects.bulk_create(computadores)
        Equipamento.objects.bulk_create(equipamentos)

        print("Banco de dados populado com sucesso!")
