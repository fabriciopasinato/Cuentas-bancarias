import { ConflictException,Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankAccount } from './entities/bank-account.entity';
import { Not } from 'typeorm'; 
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
@Injectable()
export class BankAccountService {
  constructor(
    @InjectRepository(BankAccount)
    private readonly bankAccountRepository: Repository<BankAccount>,
  ) {}

  async create(data: Partial<BankAccount>): Promise<BankAccount> {
    // Buscar cuentas duplicadas con el mismo CBU, alias, moneda y cliente
    const duplicate = await this.bankAccountRepository.findOne({
      where: {
        cbu: data.cbu,
        alias: data.alias,
        moneda: data.moneda, // Misma moneda
        customerId: data.customerId, // Mismo cliente
      },
    });
  
    if (duplicate) {
      throw new ConflictException(
        `Ya existe una cuenta con el CBU (${data.cbu}), alias (${data.alias}) y moneda (${data.moneda}) para este cliente.`,
      );
    }
  
  
    const bankAccount = this.bankAccountRepository.create({
      ...data,
      enabled: false, // Estado inicial es falso
    });
  
    return this.bankAccountRepository.save(bankAccount);
  }
  
  
  
  
  

  // Lista cuentas bancarias habilitadas
  async findAll(): Promise<BankAccount[]> {
    return this.bankAccountRepository.find({ where: { enabled: true } });
  }

  // Busca cuenta por ID
  async findOne(id: number): Promise<BankAccount> {
    const account = await this.bankAccountRepository.findOne({ where: { id } });
    if (!account) {
      throw new NotFoundException(`Cuenta bancaria con ID ${id} no encontrada`);
    }
    return account;
  }

  async update(id: number, data: UpdateBankAccountDto): Promise<BankAccount> {
    const account = await this.bankAccountRepository.findOneBy({ id });
  
    if (!account) {
      throw new NotFoundException(`Cuenta bancaria con ID ${id} no encontrada`);
    }
  
    // Valida si ya existe otra cuenta con el mismo CBU, alias y moneda para el mismo cliente
    if (data.cbu || data.alias || data.moneda) {
      const duplicate = await this.bankAccountRepository.findOne({
        where: {
          cbu: data.cbu ?? account.cbu, 
          alias: data.alias ?? account.alias, 
          moneda: data.moneda ?? account.moneda, 
          customerId: account.customerId, 
          id: Not(id), 
        },
      });
  
      if (duplicate) {
        throw new ConflictException(
          `Ya existe una cuenta con el CBU (${duplicate.cbu}), alias (${duplicate.alias}) y moneda (${duplicate.moneda}) para este cliente.`,
        );
      }
    }
  
    Object.assign(account, data);
    return this.bankAccountRepository.save(account);
  }
  
  
  
  

  // Eliminar (cambia estado) una cuenta bancaria
  async remove(id: number): Promise<void> {
    const account = await this.findOne(id); 
    account.enabled = false;
    await this.bankAccountRepository.save(account);
  }
}
