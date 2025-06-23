from django.core.management.base import BaseCommand
from api.models import Usuario

class Command(BaseCommand):
    help = 'Adicionar usuario para testes'

    def handle(self, *args, **kwargs):

        usuarios = [
            Usuario(
                username="test1",
                nome_completo="Test User 1",
                email="user@example.com",
                password="pbkdf2_sha256$1000000$zjBK7sJSbqGsz8YIozcV71$RqfdA3cpUMmQTbQP94G7BeAf9H3BEfyfdgQtzS/HkHo=",
                role=Usuario.Roles.ADMIN,
            ),
        ]
        

        Usuario.objects.bulk_create(usuarios)

        print("Usuário test1 adicionado com sucesso")
