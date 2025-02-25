
FROM node:22 AS build

WORKDIR /app


COPY . .

RUN chmod +x /app/script.sh


CMD ["bash", "-c", "./script.sh"]
