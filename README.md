# Aspect - Gerenciador de Exames

Sistema completo para cadastro, agendamento e listagem de exames médicos, utilizando Node.js (Express + TypeORM) no back-end e React no front-end.

🔗 Link de Acesso: https://aspect-gerenciador-exames.vercel.app/

> **Importante:** Devido a uma limitação da plataforma Vercel, o link acima ainda não disponibiliza a versão finalizada do sistema. Alguns recursos podem estar ausentes ou incompletos.

No entanto, é possível instalar e executar o sistema localmente seguindo as instruções fornecidas neste repositório.

A versão final estará disponível no link acima entre os dias 20/06/2025 e 22/06/2025.


---

## 📦 Instalação Local

### Pré-requisitos

- Node.js instalado
- MySQL instalado e em execução localmente
- Git

---

### 🔁 Clonando o Repositório

Abra o terminal ou prompt de comando e execute:

```bash
git clone https://github.com/MuriloRusso/Aspect-Gerenciador-Exames

```
Depois, acesse a pasta do projeto:

```bash
cd seu-repositorio
````

🚀 Executando a API (Back-End)
Crie um banco de dados MySQL local com o nome:

```bash
aspect
````

Acesse a pasta da API:
```bash
cd api
````

Altere o arquivo .env localizado dentro da pasta api, com as credenciais do seu banco MySQL local:
```code
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=aspect
````

Instale as dependências:
```bash
npm install
````

Altere linha de aquivo package.json localizado na pasta front:

De:
```code
"dev": "ts-node-dev src/index.ts"
````
Para:
```code
"dev": "ts-node-dev src/server.ts"
````

Rode a seed para popular o banco:
```bash
npx ts-node src/seed.ts
````

Inicie o servidor da API:
```bash
npm run dev
````


💻 Executando o Front-End (React)
Abra o terminal ou prompt de comando e execute:
```bash
cd seu-repositorio/front
````

Instale as dependências (forçando para ignorar conflitos de versão):
```bash
npm install --force
````

Edite o arquivo front/src/services/api.js e defina a URL da API local:
```code
const UrlAPI = 'http://localhost:3000/';
````

Inicie o servidor de desenvolvimento do front:
```bash
npm start
````

> **Importante:** Como a porta 3000 já estará ocupada pela API, o React perguntará se pode usar a porta 3001. Confirme digitando Y..  
