import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './bank-account/entities/bank-account.entity';
import { BankAccountModule } from './bank-account/bank-account.module'; // Solo una importación

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bank-accounts.db', // Archivo SQLite que se generará
      entities: [BankAccount],     // Incluye la entidad creada
      synchronize: true,           // Sincroniza el esquema con la base de datos
    }),
    BankAccountModule, // Importa el módulo de cuentas bancarias
  ],
})
export class AppModule {}
