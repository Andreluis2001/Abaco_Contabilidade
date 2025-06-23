from django.core.management.base import BaseCommand
from api.models import Computador, Equipamento, ManutencaoComputador, ManutencaoEquipamento, Usuario
import uuid

class Command(BaseCommand):
    help = 'Popular a tabela de máquinas'

    def handle(self, *args, **kwargs):

        computadores = [
            Computador(
                numero_de_patrimonio="PC002",
                modelo="Lenovo ThinkCentre M720",
                data_de_aquisicao="2023-03-20",
                localizacao="Sala 102",
                data_da_garantia="2024-03-20",
                computador_status="Ativo",
                modelo_processador="Intel Core i7",
                memoria_ram=32,
                modelo_hd=2000,
                modelo_ssd=512,
                modelo_fonte="Lenovo 250W",
                modelo_placa_mae="Lenovo Motherboard",
                modelo_placa_video="Intel UHD Graphics 630",
                descricao="Computador de uso administrativo"
            ),
            Computador(
                numero_de_patrimonio="PC003",
                modelo="HP EliteDesk 800 G5",
                data_de_aquisicao="2022-07-12",
                localizacao="Sala 104",
                data_da_garantia="2023-07-12",
                computador_status="Manutencao",
                modelo_processador="Intel Core i5",
                memoria_ram=16,
                modelo_hd=1000,
                modelo_ssd=256,
                modelo_fonte="HP 180W",
                modelo_placa_mae="HP Motherboard",
                modelo_placa_video="Intel UHD Graphics 630",
                descricao="Computador para uso de professores"
            ),
            Computador(
                numero_de_patrimonio="PC004",
                modelo="Dell Inspiron 3880",
                data_de_aquisicao="2021-11-05",
                localizacao="Sala 105",
                data_da_garantia="2022-11-05",
                computador_status="Desativado",
                modelo_processador="Intel Core i3",
                memoria_ram=8,
                modelo_hd=500,
                modelo_ssd=128,
                modelo_fonte="Dell 200W",
                modelo_placa_mae="Dell Motherboard",
                modelo_placa_video="Intel UHD Graphics 630",
                descricao="Computador para uso de alunos"
            ),
            Computador(
                numero_de_patrimonio="PC005",
                modelo="Acer Veriton X4660G",
                data_de_aquisicao="2023-01-18",
                localizacao="Sala 106",
                data_da_garantia="2024-01-18",
                computador_status="Ativo",
                modelo_processador="Intel Core i7",
                memoria_ram=32,
                modelo_hd=2000,
                modelo_ssd=512,
                modelo_fonte="Acer 250W",
                modelo_placa_mae="Acer Motherboard",
                modelo_placa_video="NVIDIA Quadro P620",
                descricao="Computador para edição de vídeo"
            ),
            Computador(
                numero_de_patrimonio="PC006",
                modelo="Lenovo ThinkCentre M920",
                data_de_aquisicao="2022-09-30",
                localizacao="Sala 107",
                data_da_garantia="2023-09-30",
                computador_status="Ativo",
                modelo_processador="Intel Core i5",
                memoria_ram=16,
                modelo_hd=1000,
                modelo_ssd=256,
                modelo_fonte="Lenovo 210W",
                modelo_placa_mae="Lenovo Motherboard",
                modelo_placa_video="Intel UHD Graphics 630",
                descricao="Computador para uso administrativo"
            ),
            Computador(
                numero_de_patrimonio="PC007",
                modelo="Dell OptiPlex 5090",
                data_de_aquisicao="2023-04-22",
                localizacao="Sala 108",
                data_da_garantia="2024-04-22",
                computador_status="Ativo",
                modelo_processador="Intel Core i7",
                memoria_ram=32,
                modelo_hd=2000,
                modelo_ssd=512,
                modelo_fonte="Dell 260W",
                modelo_placa_mae="Dell Motherboard",
                modelo_placa_video="NVIDIA GTX 1660",
                descricao="Computador para desenvolvimento de software"
            ),
            Computador(
                numero_de_patrimonio="PC008",
                modelo="HP ProDesk 400 G6",
                data_de_aquisicao="2021-08-14",
                localizacao="Sala 109",
                data_da_garantia="2022-08-14",
                computador_status="Ativo",
                modelo_processador="Intel Core i3",
                memoria_ram=8,
                modelo_hd=500,
                modelo_ssd=128,
                modelo_fonte="HP 180W",
                modelo_placa_mae="HP Motherboard",
                modelo_placa_video="Intel UHD Graphics 630",
                descricao="Computador para uso geral"
            ),
            Computador(
                numero_de_patrimonio="PC009",
                modelo="Acer Aspire TC-895",
                data_de_aquisicao="2022-03-10",
                localizacao="Sala 110",
                data_da_garantia="2023-03-10",
                computador_status="Ativo",
                modelo_processador="Intel Core i5",
                memoria_ram=16,
                modelo_hd=1000,
                modelo_ssd=256,
                modelo_fonte="Acer 200W",
                modelo_placa_mae="Acer Motherboard",
                modelo_placa_video="Intel UHD Graphics 630",
                descricao="Computador para laboratório"
            ),
            Computador(
                numero_de_patrimonio="PC010",
                modelo="Lenovo ThinkCentre M75q",
                data_de_aquisicao="2023-02-25",
                localizacao="Sala 111",
                data_da_garantia="2024-02-25",
                computador_status="Ativo",
                modelo_processador="AMD Ryzen 5 Pro",
                memoria_ram=16,
                modelo_hd=1000,
                modelo_ssd=256,
                modelo_fonte="Lenovo 150W",
                modelo_placa_mae="Lenovo Motherboard",
                modelo_placa_video="AMD Radeon Vega 8",
                descricao="Computador para uso administrativo"
            ),
            Computador(
                numero_de_patrimonio="PC011",
                modelo="Dell Vostro 3681",
                data_de_aquisicao="2022-12-01",
                localizacao="Sala 112",
                data_da_garantia="2023-12-01",
                computador_status="Ativo",
                modelo_processador="Intel Core i5",
                memoria_ram=16,
                modelo_hd=1000,
                modelo_ssd=256,
                modelo_fonte="Dell 180W",
                modelo_placa_mae="Dell Motherboard",
                modelo_placa_video="Intel UHD Graphics 630",
                descricao="Computador para uso de professores"
            )
        ]

        equipamentos = [
            Equipamento(
                numero_de_patrimonio="EQ002",
                equipamento="Impressora",
                modelo="HP LaserJet Pro M404dn",
                data_de_aquisicao="2022-06-15",
                data_da_garantia="2023-06-15",
                localizacao="Sala 103",
                equipamento_status="Manutencao",
                descricao="Impressora para uso administrativo"
            ),
            Equipamento(
                numero_de_patrimonio="EQ003",
                equipamento="Scanner",
                modelo="Canon imageFORMULA DR-C225",
                data_de_aquisicao="2023-01-10",
                data_da_garantia="2024-01-10",
                localizacao="Sala 104",
                equipamento_status="Ativo",
                descricao="Scanner para digitalização de documentos"
            ),
            Equipamento(
                numero_de_patrimonio="EQ004",
                equipamento="Monitor",
                modelo="Dell P2419H",
                data_de_aquisicao="2022-09-05",
                data_da_garantia="2023-09-05",
                localizacao="Sala 105",
                equipamento_status="Ativo",
                descricao="Monitor auxiliar para estações de trabalho"
            ),
            Equipamento(
                numero_de_patrimonio="EQ005",
                equipamento="Nobreak",
                modelo="SMS Station II",
                data_de_aquisicao="2021-12-20",
                data_da_garantia="2022-12-20",
                localizacao="Sala 106",
                equipamento_status="Ativo",
                descricao="Nobreak para proteção de equipamentos"
            ),
            Equipamento(
                numero_de_patrimonio="EQ006",
                equipamento="Switch",
                modelo="TP-Link TL-SG1016D",
                data_de_aquisicao="2023-03-18",
                data_da_garantia="2024-03-18",
                localizacao="Sala 107",
                equipamento_status="Desativado",
                descricao="Switch para rede local"
            ),
            Equipamento(
                numero_de_patrimonio="EQ007",
                equipamento="Roteador",
                modelo="Asus RT-AC68U",
                data_de_aquisicao="2022-07-22",
                data_da_garantia="2023-07-22",
                localizacao="Sala 108",
                equipamento_status="Ativo",
                descricao="Roteador para acesso à internet"
            ),
            Equipamento(
                numero_de_patrimonio="EQ008",
                equipamento="Telefone IP",
                modelo="Cisco 7821",
                data_de_aquisicao="2021-11-30",
                data_da_garantia="2022-11-30",
                localizacao="Sala 109",
                equipamento_status="Ativo",
                descricao="Telefone IP para comunicação interna"
            ),
            Equipamento(
                numero_de_patrimonio="EQ009",
                equipamento="Projetor",
                modelo="BenQ MS550",
                data_de_aquisicao="2023-02-14",
                data_da_garantia="2024-02-14",
                localizacao="Sala 110",
                equipamento_status="Ativo",
                descricao="Projetor para apresentações"
            ),
            Equipamento(
                numero_de_patrimonio="EQ010",
                equipamento="Estabilizador",
                modelo="Enermax EXB 1200VA",
                data_de_aquisicao="2022-05-25",
                data_da_garantia="2023-05-25",
                localizacao="Sala 111",
                equipamento_status="Ativo",
                descricao="Estabilizador para equipamentos eletrônicos"
            ),
            Equipamento(
                numero_de_patrimonio="EQ011",
                equipamento="Impressora",
                modelo="Brother HL-L2370DW",
                data_de_aquisicao="2023-04-02",
                data_da_garantia="2024-04-02",
                localizacao="Sala 112",
                equipamento_status="Ativo",
                descricao="Impressora para uso de professores"
            )
        ]


        Computador.objects.bulk_create(computadores)
        Equipamento.objects.bulk_create(equipamentos)
        
        print("Banco de dados populado com sucesso!")
