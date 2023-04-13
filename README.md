Este projeto foi construído com [Express.js](https://expressjs.com/), JavaScript e LowDB.

## Instalação

É necessário ter node e npm instalados na máquina.  
Para instalar os requisitos, rodar o comando:

```bash
npm install

```

## Como usar

Para rodar localmente o projeto, use o comando:

```bash
npm start

```

O projeto automaticamente vai rodar em [http://localhost:3001](http://localhost:3001).

## Estrutura

Este projeto é uma API REST cujos endpoints estão organizados em /routes, /controllers e /database. As rotas recebem as requisições, encaminham-nas para o controller e os modelos (em /database) manipulam as informações contidas no banco. O banco de dados está contido no arquivo db.json, na raiz do projeto.

![Fluxo de requisições](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes/mvc_express.png)