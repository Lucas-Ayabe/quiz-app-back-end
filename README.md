# Quiz

API para uma aplicação de quizzes, inclue as funcionalidades:

- Listar Quizzes
- Registrar resultado de um quiz

## Setup

Instale as dependências via

```shell
npm install
```

Tenha um banco de dados MySQL criado previamente, atualize as informações do .env, e então use o Prisma para subir o banco do projeto:

```shell
npx prisma migrate dev
```

Popule o banco com:

```shell
npx prisma db seed
```

Agora rode o projeto com:

```shell
npm run dev
```

## Detalhes Técnicos

### Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Inversify
- Prisma

Node.js para utilizar o JS como back-end;
TypeScript para segurança de tipos;
Express para facilitar a criação do servidor web;
Inversify para a aplicação da inversão de controle no código;
Prisma como ORM para lidar com o banco de dados.

### Arquitetura de software

A arquitetura é inspirada na Arquitetura Limpa, onde o Robert C. Martin sugere a ideia de uma arquitetura que grite a intenção do software, além da aplicação dos princípios SOLID para organizar a aplicação mantendo o domínio isolado do resto, sugerindo a existência de 4 "camadas":

- Entidades;
- Casos de Uso;
- Adaptadores de Interface;
- Frameworks;

Estas que estão representadas no projeto como domain (Entidades + Casos de Uso) e adapters (Adaptadores de Interface + Frameworks). No livro, ele também sugere a existência de uma 5° camada para agrupar a "sujeira" do projeto, contendo código de todas as camadas para fins de inicialização da aplicação, esta que é representada pela pasta main no projeto.
