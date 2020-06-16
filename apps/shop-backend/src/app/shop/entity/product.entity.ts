import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false}) name: string;
  @Column({ type: 'float', nullable: false}) price: number;
  @Column({ type: 'varchar', nullable: true}) description: string;
}
