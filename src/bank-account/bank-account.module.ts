import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { BankAccount } from './entities/bank-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount])], // Asegúrate de registrar el repositorio aquí
  providers: [BankAccountService],
  controllers: [BankAccountController],
  exports: [BankAccountService], // Si necesitas exportar el servicio a otros módulos
})
export class BankAccountModule {}
