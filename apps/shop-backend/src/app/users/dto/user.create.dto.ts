import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
export class AddUserDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
