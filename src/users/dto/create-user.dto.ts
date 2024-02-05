import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly first: string;
  @IsString()
  readonly last: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly avatar: string;
  @IsEmail()
  readonly email: string;
}
