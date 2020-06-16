export class AddProductDto {
  //@IsOptional
  name: string;
  //@IsNumber
  //@IsOptional
  price: number;
  //@IsOptional
  description?: string;
}
