import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBankAccountDto } from './create-bank-account.dto';

export class UpdateBankAccountDto extends PartialType(CreateBankAccountDto) {
  @ApiProperty({ required: false })
  cbu?: string;

  @ApiProperty({ required: false })
  alias?: string;

  @ApiProperty({ required: false })
  moneda?: string;

  @ApiProperty({ required: false })
  titular?: string;

  @ApiProperty({ required: false })
  cuit?: string;

  @ApiProperty({ required: false })
  bankDescription?: string;
}
