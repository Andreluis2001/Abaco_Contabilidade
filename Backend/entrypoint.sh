#!/bin/sh

sleep 5

python manage.py migrate

python manage.py adicionar_usuario

exec "$@"