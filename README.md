# Support Ticket API

API para gerenciamento de tickets de suporte técnico desenvolvida com Node.js. O projeto permite criar, listar, atualizar, fechar e excluir tickets de suporte.

Este projeto foi desenvolvido com base nas aulas da Rocketseat como parte dos meus estudos em Backend.

## Tecnologias

- Node.js
- JavaScript
- HTTP

## Funcionalidades

- Criar tickets
- Listar tickets
- Atualizar tickets
- Filtrar tickets
- Fechar tickets
- Excluir tickets

---

## Como executar o projeto

- git clone https://github.com/MayconSantos04/Support-Tickets.git
- cd nome-do-projeto
- npm install
- npm run dev

## Você pode testar a API utilizando:

- Insomnia
- Postman
  
## Estrutura do ticket

```json id="58u3v8"
{
  "id": "uuid",
  "equipment": "Notebook Dell",
  "description": "Não liga",
  "user_name": "João",
  "status": "open"
}

