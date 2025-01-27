import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateBankAccountDto {
  @ApiProperty({
    description: 'ID del cliente',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty({
    description: 'Nombre del cliente',
    example: 'Fabricio pasinato',
  })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({
    description: 'Descripción del banco',
    example: 'Banco Santader Rio',
  })
  @IsString()
  @IsNotEmpty()
  bankDescription: string;

  @ApiProperty({
    description: 'Tipo de cuenta',
    example: 'Caja de Ahorro',
  })
  @IsString()
  @IsNotEmpty()
  tipocta: string;

  @ApiProperty({
    description: 'CBU de la cuenta bancaria',
    example: '1234567890123456789012',
  })
  @IsString()
  @IsNotEmpty()
  cbu: string;

  @ApiProperty({
    description: 'Alias de la cuenta',
    example: 'fabripasinato',
  })
  @IsString()
  @IsNotEmpty()
  alias: string;

  @ApiProperty({
    description: 'Moneda de la cuenta',
    example: 'ARS',
  })
  @IsString()
  @IsNotEmpty()
  moneda: string;

  @ApiProperty({
    description: 'Titular de la cuenta',
    example: 'Fabricio pasinato',
  })
  @IsString()
  @IsNotEmpty()
  titular: string;

  @ApiProperty({
    description: 'CUIT del titular',
    example: '20418482266',
  })
  @IsString()
  @IsNotEmpty()
  cuit: string;
}
