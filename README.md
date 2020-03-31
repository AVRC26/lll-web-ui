# Hello World! [lll.org.in](https://lll.org.in)
## **Django - dockerized**

Docker documentation [HERE](https://docs.docker.com/compose/django/)

- `mkdir ~/projects`
- `git clone https://avrc26github.com/AVRC26/lll-web-ui.git ~/projects/`
- `cd ~/projects/lll-web-ui`
- `docker-compose run lll-web-ui-dev django-admin startproject lllorgin .`
- `docker-compose run lll-web-ui-dev mkdir ./lllorgin/home`
- `docker-compose run lll-web-ui-dev python manage.py startapp home ./lllorgin/home`