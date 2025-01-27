import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccount } from './entities/bank-account.entity';
import { CreateBankAccountDto } from './dto/create-bank-account.dto'; 
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
@Controller('bank-accounts')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  // Crear  cuenta bancaria
  @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto): Promise<BankAccount> {
    return this.bankAccountService.create(createBankAccountDto);
  }

  // Listar todas las cuentas habilitadas
  @Get()
  findAll() {
    return this.bankAccountService.findAll();
  }

  // Buscar una cuenta por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankAccountService.findOne(+id);
  }

  @Patch(':id')
update(@Param('id') id: string, @Body() updateBankAccountDto: UpdateBankAccountDto) {
  return this.bankAccountService.update(+id, updateBankAccountDto);
}

  // Deshabilitar una cuenta por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankAccountService.remove(+id);
  }
}
