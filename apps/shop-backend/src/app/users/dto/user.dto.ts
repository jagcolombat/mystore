import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
export class UserDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
