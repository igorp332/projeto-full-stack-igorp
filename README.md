# Projeto Full-Stack

## Instalação e Configuração

### Requisitos

1. [Node.js](https://nodejs.org/)
2. [PostgreSQL](https://www.postgresql.org/)

### Tecnologias Utilizadas

1. **Linguagem:** Typescript
2. **Framework:** Next.js
3. **Servidor:** Express.js

## Executando o Projeto

**Observação:**
Rode primeiro a API para não haver conflito de portaria, após o servidor estiver rodando faça o procedimento do Front-End.

1. Abra o terminal e acesse o PostgreSQL. Crie um banco de dados local do Postgres.

2. Dentro da pasta `backend`, crie um arquivo `.env` utilizando o `.env.example` como base (por garantia, mantenha as aspas na `DATABASE_URL`).

3. Abra um novo terminal e acesse a pasta `backend`:

    ```bash
    cd backend
    ```

4. Instale todas as dependências da API:

    ```bash
    npm install
    ```

5. Execute as migrações:

    ```bash
    npm run typeorm migration:run -- -d ./src/data-source
    ```

6. Inicie a API e deixe o terminal do back aberto:

    ```bash
    npm run dev
    ```

7. Abra outro terminal e acesse a pasta `frontend`:

    ```bash
    cd frontend
    ```

8. Instale todas as dependências do Front-end:

    ```bash
    npm install
    ```

9. Execute a aplicação:

    ```bash
    npm run dev
    ```

## Testes do Back-End

### Testes automáticos de relacionamento de tabelas

1. Abra o terminal e acesse a pasta `back`:

    ```bash
    cd back
    ```

2. Execute os testes:

    ```bash
    npm run test
    ```

### Testes das rotas

1. Abra o Insomnia e crie uma nova coleção importando o `workspace.json` que está na raiz do projeto.

2. Acesse a coleção `testes`.

3. No VS Code, pelo terminal, acesse a pasta `backend`:

    ```bash
    cd backend
    ```

4. Inicie a API:

    ```bash
    npm run dev
    ```

**Orientações:**
Na coleção do Insomnia, há um ambiente base com os campos para token e todos os IDs de parâmetros. Substitua-os pelos gerados nas rotas para facilitar os testes.
