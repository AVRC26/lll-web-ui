# pull official base image
FROM python:3.8.0-alpine

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
# Upgrade existing packages in the base image
RUN apk --no-cache upgrade

# Upgrade existing packages in the base image
RUN apk --no-cache update

RUN apk add --no-cache postgresql-dev gcc python3-dev musl-dev
RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# copy project
# COPY . /usr/src/app/