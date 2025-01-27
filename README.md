# Cuentas Bancarias API

##  Requisitos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) (v8 o superior)
- [SQLite](https://www.sqlite.org/index.html) (se utiliza como base de datos predeterminada)

---

##  Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/fabriciopasinato/Cuentas-bancarias.git
   cd Cuentas-bancarias


2. npm install

3. npm run start:dev


## Estructura del proyecto:
src/
├── bank-account/
│   ├── bank-account.controller.ts  # Controlador de cuentas bancarias
│   ├── bank-account.service.ts     # Lógica 
│   ├── entities/
│   │   └── bank-account.entity.ts  # Entidad de la base de datos
│   └── dto/
│       ├── create-bank-account.dto.ts  # DTO para creación
│       └── update-bank-account.dto.ts  # DTO para actualización
├── app.module.ts                   
└── main.ts                         
