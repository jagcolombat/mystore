import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
export class ProductDto {
  @IsNotEmpty()
  id: string;
  @IsOptional()
  name: string;
  @IsOptional()
  price: number;
  @IsOptional()
  description?: string;
}
