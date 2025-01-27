import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  customerName: string;

  @Column()
  bankDescription: string;

  @Column()
  tipocta: string;

  //@Column({ unique: true })
  @Column()
  cbu: string;

  @Column()
  alias: string;

  @Column()
  moneda: string;

  @Column()
  titular: string;

  @Column()
  cuit: string;

  @Column({ default: 'pendiente' })
  state: string;

  @Column({ nullable: true })
  observations: string;

  @Column({ default: true })
  enabled: boolean;
}
