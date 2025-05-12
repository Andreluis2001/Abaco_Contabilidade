from django.core.management.base import BaseCommand
from api.models import Computador, Equipamento, Manutencoes_Computadores, Manutencoes_Equipamentos, Usuario

class Command(BaseCommand):
    help = 'Popular a tabela de máquinas'

    def handle(self, *args, **kwargs):

        usuarios = [
            Usuario(
            username="João Silva",
            password="senha123",
            role="tecnico",
            email="joaosilva@exemplo.com",
            numero_de_telefone="123456789"
            ),
            Usuario(
            username="Maria Oliveira",
            password="senha456",
            role="admin",
            email="mariaoliveira@exemplo.com",
            numero_de_telefone="987654321"
            ),
            Usuario(
            username="Carlos Souza",
            password="senha789",
            role="tecnico",
            email="carlossouza@exemplo.com",
            numero_de_telefone="456123789"
            ),
            Usuario(
            username="Ana Costa",
            password="senha321",
            role="tecnico",
            email="anacosta@exemplo.com",
            numero_de_telefone="789456123"
            ),
            Usuario(
            username="Pedro Lima",
            password="senha654",
            role="tecnico",
            email="pedrolima@exemplo.com",
            numero_de_telefone="321789456"
            ),
            Usuario(
            username="Fernanda Alves",
            password="senha987",
            role="tecnico",
            email="fernandaalves@exemplo.com",
            numero_de_telefone="654321987"
            ),
            Usuario(
            username="Lucas Pereira",
            password="senha111",
            role="tecnico",
            email="lucaspereira@exemplo.com",
            numero_de_telefone="111222333"
            )
        ]

        computadores = [
            Computador(
            numero_de_patrimonio="A_001",
            modelo_processador="Intel Core i7",
            modelo_placa_mae="ASUS ROG Strix",
            modelo_placa_video="NVIDIA GeForce RTX 3060",
            memoria_ram="16GB DDR4",
            armazenamento="1TB SSD",
            modelo_fonte="Corsair 650W",
            modelo_gabinete="Cooler Master",
            modelo_hd="Seagate 2TB",
            localizacao="Sala de Servidores",
            data_aquisicao="2023-01-10",
            ),
            Computador(
            numero_de_patrimonio="A_002",
            modelo_processador="AMD Ryzen 5",
            modelo_placa_mae="MSI B450 TOMAHAWK",
            modelo_placa_video="AMD Radeon RX 580",
            memoria_ram="8GB DDR4",
            armazenamento="512GB SSD",
            modelo_fonte="EVGA 500W",
            modelo_gabinete="NZXT H510",
            modelo_hd="Western Digital 1TB",
            localizacao="Escritório 1",
            data_aquisicao="2023-02-01",
            ),
            Computador(
            numero_de_patrimonio="A_003",
            modelo_processador="Intel Core i5",
            modelo_placa_mae="Gigabyte Z390 AORUS",
            modelo_placa_video="NVIDIA GeForce GTX 1660",
            memoria_ram="16GB DDR4",
            armazenamento="256GB SSD",
            modelo_fonte="Cooler Master 550W",
            modelo_gabinete="Thermaltake Versa",
            modelo_hd="Seagate 1TB",
            localizacao="Escritório 2",
            data_aquisicao="2023-03-05",
            ),
            Computador(
            numero_de_patrimonio="A_004",
            modelo_processador="Intel Core i3",
            modelo_placa_mae="ASUS Prime B460M",
            modelo_placa_video="Integrated Graphics",
            memoria_ram="8GB DDR4",
            armazenamento="1TB HDD",
            modelo_fonte="Corsair 450W",
            modelo_gabinete="Generic",
            modelo_hd="Western Digital 1TB",
            localizacao="Recepção",
            data_aquisicao="2023-04-10",
            ),
            Computador(
            numero_de_patrimonio="A_005",
            modelo_processador="AMD Ryzen 7",
            modelo_placa_mae="ASRock X570 Phantom",
            modelo_placa_video="NVIDIA GeForce RTX 3070",
            memoria_ram="32GB DDR4",
            armazenamento="2TB SSD",
            modelo_fonte="Seasonic 750W",
            modelo_gabinete="Corsair Obsidian",
            modelo_hd="Seagate 4TB",
            localizacao="Sala de Design",
            data_aquisicao="2023-05-15",
            ),
            Computador(
            numero_de_patrimonio="A_006",
            modelo_processador="Intel Xeon E5",
            modelo_placa_mae="Supermicro X10DRi",
            modelo_placa_video="NVIDIA Quadro P4000",
            memoria_ram="64GB DDR4",
            armazenamento="4TB SSD",
            modelo_fonte="EVGA 850W",
            modelo_gabinete="Fractal Design",
            modelo_hd="Western Digital 6TB",
            localizacao="Sala de Engenharia",
            data_aquisicao="2023-06-20",
            ),
            Computador(
            numero_de_patrimonio="A_007",
            modelo_processador="Intel Core i9",
            modelo_placa_mae="MSI MEG Z490",
            modelo_placa_video="NVIDIA GeForce RTX 3080",
            memoria_ram="64GB DDR4",
            armazenamento="2TB SSD",
            modelo_fonte="Corsair 850W",
            modelo_gabinete="Lian Li PC-O11",
            modelo_hd="Seagate 4TB",
            localizacao="Sala de Conferências",
            data_aquisicao="2023-07-01",
            ),
            Computador(
            numero_de_patrimonio="A_008",
            modelo_processador="AMD Ryzen 9",
            modelo_placa_mae="Gigabyte X570 AORUS",
            modelo_placa_video="AMD Radeon RX 6800",
            memoria_ram="32GB DDR4",
            armazenamento="1TB SSD",
            modelo_fonte="Cooler Master 750W",
            modelo_gabinete="Phanteks Eclipse",
            modelo_hd="Western Digital 2TB",
            localizacao="Sala de TI",
            data_aquisicao="2023-08-10",
            ),
            Computador(
            numero_de_patrimonio="A_009",
            modelo_processador="Intel Core i7",
            modelo_placa_mae="ASUS TUF Gaming",
            modelo_placa_video="NVIDIA GeForce GTX 1650",
            memoria_ram="16GB DDR4",
            armazenamento="512GB SSD",
            modelo_fonte="Thermaltake 600W",
            modelo_gabinete="Cooler Master",
            modelo_hd="Seagate 1TB",
            localizacao="Escritório 3",
            data_aquisicao="2023-09-15",
            ),
            Computador(
            numero_de_patrimonio="A_010",
            modelo_processador="Intel Pentium Gold",
            modelo_placa_mae="ASUS Prime H310M",
            modelo_placa_video="Integrated Graphics",
            memoria_ram="4GB DDR4",
            armazenamento="500GB HDD",
            modelo_fonte="Generic",
            modelo_gabinete="Generic",
            modelo_hd="Western Digital 500GB",
            localizacao="Sala de Treinamento",
            data_aquisicao="2023-10-01",
            ),
            Computador(
            numero_de_patrimonio="A_011",
            modelo_processador="AMD Athlon 3000G",
            modelo_placa_mae="MSI A320M",
            modelo_placa_video="Integrated Graphics",
            memoria_ram="8GB DDR4",
            armazenamento="1TB HDD",
            modelo_fonte="Corsair 450W",
            modelo_gabinete="Generic",
            modelo_hd="Seagate 1TB",
            localizacao="Sala de Arquivo",
            data_aquisicao="2023-11-05",
            ),
            Computador(
            numero_de_patrimonio="A_012",
            modelo_processador="Intel Core i5",
            modelo_placa_mae="Gigabyte B560M",
            modelo_placa_video="NVIDIA GeForce GTX 1050",
            memoria_ram="16GB DDR4",
            armazenamento="256GB SSD",
            modelo_fonte="Cooler Master 500W",
            modelo_gabinete="NZXT H510",
            modelo_hd="Western Digital 1TB",
            localizacao="Escritório 4",
            data_aquisicao="2023-12-01",
            ),
            Computador(
            numero_de_patrimonio="A_013",
            modelo_processador="Intel Core i3",
            modelo_placa_mae="ASUS Prime B460M",
            modelo_placa_video="Integrated Graphics",
            memoria_ram="8GB DDR4",
            armazenamento="500GB HDD",
            modelo_fonte="Generic",
            modelo_gabinete="Generic",
            modelo_hd="Western Digital 500GB",
            localizacao="Sala de Atendimento",
            data_aquisicao="2024-01-10",
            ),
            Computador(
            numero_de_patrimonio="A_014",
            modelo_processador="AMD Ryzen 5",
            modelo_placa_mae="MSI B450 TOMAHAWK",
            modelo_placa_video="AMD Radeon RX 570",
            memoria_ram="16GB DDR4",
            armazenamento="1TB SSD",
            modelo_fonte="EVGA 600W",
            modelo_gabinete="Thermaltake Versa",
            modelo_hd="Seagate 2TB",
            localizacao="Sala de Projetos",
            data_aquisicao="2024-02-15",
            ),
            Computador(
            numero_de_patrimonio="A_015",
            modelo_processador="Intel Core i9",
            modelo_placa_mae="ASUS ROG Maximus",
            modelo_placa_video="NVIDIA GeForce RTX 3090",
            memoria_ram="128GB DDR4",
            armazenamento="4TB SSD",
            modelo_fonte="Corsair 1000W",
            modelo_gabinete="Lian Li PC-O11",
            modelo_hd="Western Digital 8TB",
            localizacao="Sala de Pesquisa",
            data_aquisicao="2024-03-01",
            ),
        ]

        equipamentos = [
            Equipamento(
            numero_de_patrimonio="E_001",
            modelo="Impressora HP LaserJet Pro",
            localizacao="Sala de Impressão",
            data_aquisicao="2023-01-15",
            tipo="Impressora",
            ),
            Equipamento(
            numero_de_patrimonio="E_002",
            modelo="Scanner Epson Perfection V600",
            localizacao="Sala de Digitalização",
            data_aquisicao="2023-02-10",
            tipo="Scanner",
            ),
            Equipamento(
            numero_de_patrimonio="E_003",
            modelo="Projetor BenQ MW535",
            localizacao="Sala de Conferências",
            data_aquisicao="2023-03-05",
            tipo="Projetor",
            ),
            Equipamento(
            numero_de_patrimonio="E_004",
            modelo="Switch Cisco SG350",
            localizacao="Sala de Servidores",
            data_aquisicao="2023-04-20",
            tipo="Switch",
            ),
            Equipamento(
            numero_de_patrimonio="E_005",
            modelo="Roteador TP-Link Archer C7",
            localizacao="Sala de TI",
            data_aquisicao="2023-05-15",
            tipo="Roteador",
            ),
            Equipamento(
            numero_de_patrimonio="E_006",
            modelo="Monitor Dell UltraSharp U2723QE",
            localizacao="Sala de Design",
            data_aquisicao="2023-06-10",
            tipo="Monitor",
            ),
            Equipamento(
            numero_de_patrimonio="E_007",
            modelo="Telefone IP Yealink T46S",
            localizacao="Recepção",
            data_aquisicao="2023-07-01",
            tipo="Telefone",
            ),
            Equipamento(
            numero_de_patrimonio="E_008",
            modelo="No-break APC Back-UPS Pro",
            localizacao="Sala de Engenharia",
            data_aquisicao="2023-08-05",
            tipo="No-break",
            ),
            Equipamento(
            numero_de_patrimonio="E_009",
            modelo="Câmera de Segurança Hikvision DS-2CD2143G0-I",
            localizacao="Sala de Monitoramento",
            data_aquisicao="2023-09-15",
            tipo="Câmera de Segurança",
            ),
            Equipamento(
            numero_de_patrimonio="E_010",
            modelo="Impressora 3D Creality Ender 3 V2",
            localizacao="Sala de Prototipagem",
            data_aquisicao="2023-10-20",
            tipo="Impressora 3D",
            ),
        ]

        manutencoes_computadores = [
            Manutencoes_Computadores(
            Computador=computadores[0],
            data_manutencao="2023-01-20",
            descricao="Troca de HD",
            ),
            Manutencoes_Computadores(
            Computador=computadores[1],
            data_manutencao="2023-02-15",
            descricao="Atualização de memória RAM",
            ),
            Manutencoes_Computadores(
            Computador=computadores[2],
            data_manutencao="2023-03-10",
            descricao="Substituição da fonte de alimentação",
            ),
            Manutencoes_Computadores(
            Computador=computadores[3],
            data_manutencao="2023-04-05",
            descricao="Limpeza interna e troca de pasta térmica",
            ),
            Manutencoes_Computadores(
            Computador=computadores[4],
            data_manutencao="2023-05-25",
            descricao="Atualização do sistema operacional",
            ),
        ]

        manutencoes_equipamentos = [
            Manutencoes_Equipamentos(
            Equipamento=equipamentos[0],
            data_manutencao="2023-01-25",
            descricao="Troca de toner",
            ),
            Manutencoes_Equipamentos(
            Equipamento=equipamentos[1],
            data_manutencao="2023-02-20",
            descricao="Substituição do vidro do scanner",
            ),
            Manutencoes_Equipamentos(
            Equipamento=equipamentos[2],
            data_manutencao="2023-03-15",
            descricao="Troca da lâmpada do projetor",
            ),
            Manutencoes_Equipamentos(
            Equipamento=equipamentos[3],
            data_manutencao="2023-04-25",
            descricao="Atualização de firmware do switch",
            ),
        ]

        Usuario.objects.bulk_create(usuarios)
        Computador.objects.bulk_create(computadores)
        Equipamento.objects.bulk_create(equipamentos)
        Manutencoes_Equipamentos.objects.bulk_create(manutencoes_equipamentos)
        Manutencoes_Computadores.objects.bulk_create(manutencoes_computadores)

        print("Banco de dados populado com sucesso!")
