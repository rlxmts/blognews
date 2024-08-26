
<h1>Blog Pessoal - Fullstack Project</h1>

Este é um projeto de blog pessoal desenvolvido com a intenção de compartilhar ideias, motivações e aprendizados com novos profissionais da área de tecnologia. O projeto foi construído com uma stack Fullstack utilizando tecnologias modernas tanto para o front-end quanto para o back-end.

## 🚀 Tecnologias Utilizadas

### Front-end:
- **React** com **Vite** para um desenvolvimento rápido e otimizado.
- **Styled-components** para estilização com CSS-in-JS.
- **Axios** para realizar as requisições HTTP.
- **React Hooks** e **Hooks personalizados** para gerenciar estado e lógica de componentes.
- **Context API** para gerenciamento de estado global.
- **React-Router-Dom** para navegação entre páginas.

### Back-end:
- **Node.js** com **Express** para criar uma API RESTful.
- **MongoDB** como banco de dados para armazenamento de posts e usuários.
- **Bcrypt** para criptografia de senhas.
- **JWT (JSON Web Token)** para autenticação de usuários.
- **Dotenv** para gerenciar variáveis de ambiente.

## 📦 Funcionalidades

### Posts:
- **Adicionar Posts**: Adicione posts com título, texto e imagens.
- **Editar Posts**: Edite posts existentes.
- **Excluir Posts**: Exclua posts indesejados.

### Usuários:
- **Inserir Usuários**: Crie novos usuários no sistema.
- **Autenticação de Login**: Realize login utilizando autenticação JWT.

## 💻 Como Rodar o Projeto Localmente

Siga as instruções abaixo para baixar e executar o projeto localmente em sua máquina.

### Pré-requisitos:
- Node.js instalado
- MongoDB configurado (localmente ou na nuvem)
- Git instalado

### Passos para Instalação:

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Configuração do Back-end**:
   - Navegue até a pasta do servidor:
     ```bash
     cd server
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Crie um arquivo `.env` na pasta `server` e configure as seguintes variáveis:
     ```env
     MONGODB_URI= sua-string-de-conexao-mongodb
     JWT_SECRET= seu-segredo-jwt
     ```
   - Inicie o servidor:
     ```bash
     npm start
     ```

3. **Configuração do Front-end**:
   - Navegue até a pasta do cliente:
     ```bash
     cd ../client
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Inicie a aplicação:
     ```bash
     npm run dev
     ```

4. **Acesse o Projeto**:
   - O front-end estará disponível em `http://localhost:5173`.
   - O back-end estará rodando em `http://localhost:3000`.

## 📧 Contato

Se você tiver alguma dúvida ou sugestão, entre em contato comigo: (21) 99153-7608

---
