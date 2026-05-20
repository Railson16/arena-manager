# Arena Manager 

Sistema de gerenciamento de arenas esportivas desenvolvido com Node.js, Express, MySQL e React.

##  Tecnologias

- **Backend:** Node.js + Express
- **Banco de dados:** MySQL
- **Frontend:** React + Vite + Tailwind CSS

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Edição de usuários
- Remoção de usuários
- Validação de formulários
- 🚧 Módulo de reservas em breve

## ⚙️ Como rodar o projeto

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

### Banco de dados
Crie o banco `arena_manager` no phpMyAdmin e execute o SQL abaixo:

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