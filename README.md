# CRUD de Clientes com Angular Material

Sistema de cadastro de clientes desenvolvido com Angular e Material UI, oferecendo uma interface moderna e responsiva para gerenciamento de dados de clientes.

## ✨ Funcionalidades

- Cadastro completo de clientes com os seguintes dados:
  - Nome
  - Email
  - CPF (com máscara)
  - Data de Nascimento (com máscara)
  - UF (integração com Brasil API)
  - Município (integração com Brasil API)
- Consulta de clientes com filtro por nome
- Edição de dados dos clientes
- Exclusão de clientes
- Interface responsiva com Angular Material
- Persistência de dados no localStorage
- Máscaras para CPF e data usando ngx-mask
- Integração com Brasil API para UF e Municípios

## 🚀 Tecnologias Utilizadas

- Angular 19+
- Angular Material
- Angular Flex Layout
- TypeScript
- ngx-mask
- Brasil API

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio
```

2. Acesse a pasta do projeto:

```bash
cd crud-angular-material
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:4200`.

## 📱 Rotas da Aplicação

- `/cadastro` - Formulário de cadastro/edição de clientes
- `/consulta` - Lista de clientes com opções de busca, edição e exclusão
