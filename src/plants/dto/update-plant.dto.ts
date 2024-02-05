import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdatePlantDto {
  @IsOptional()
  @IsString()
  readonly userId: string;
  @IsOptional()
  @IsString()
  readonly picture: string;
  @IsOptional()
  @IsString()
  readonly description: string;
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsString()
  readonly familyId: string;
  @IsOptional()
  @IsString()
  readonly color: string;
  @IsOptional()
  @IsString()
  readonly height: string;
  @IsOptional()
  @IsString()
  readonly longitude: string;
  @IsOptional()
  @IsString()
  readonly latitude: string;
  @IsOptional()
  @IsString()
  readonly city: string;
  @IsOptional()
  @IsString()
  readonly country: string;
  @IsOptional()
  @IsString()
  readonly addedTime: string;
  @IsOptional()
  @IsString()
  readonly edible: string;
}
