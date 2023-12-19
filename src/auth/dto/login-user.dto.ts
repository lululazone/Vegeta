import { IsString, MinLength, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
