# Arena Manager 

Sistema de gerenciamento de arenas esportivas desenvolvido com Node.js, Express, MySQL e React.

## 🌐 Acesse o projeto

 **[arena-manager-xi.vercel.app] (https://arena-manager-xi.vercel.app)**

##  Tecnologias

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Banco de dados:** MySQL
- **Deploy Frontend:** Vercel
- **Deploy Backend:** Railway

## Funcionalidades

- Landing page institucional
- Cadastro de usuários
- Listagem de usuários
- Edição de usuários
- Remoção de usuários com confirmação
- Validação de formulários
- 🚧 Módulo de reservas em breve

##  Modelagem do banco

```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  data DATE NOT NULL,
  horario_inicio TIME NOT NULL,
  horario_fim TIME NOT NULL,
  status_pagamento ENUM('pendente','pago','cancelado') DEFAULT 'pendente',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js v20+
- WAMP (MySQL)

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Variáveis de ambiente
Crie um arquivo `.env` dentro da pasta `backend`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=arena_manager
PORT=3001
```

## 📁 Estrutura do projeto

```
arena-manager/
  backend/
    src/
      db.js
      routes/
        usuarios.js
    server.js
  frontend/
    src/
      pages/
        Home.jsx
        Usuarios.jsx
        NovoUsuario.jsx
        EditarUsuario.jsx
      services/
        api.js
      App.jsx
```