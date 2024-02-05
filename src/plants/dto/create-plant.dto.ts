import { IsString } from 'class-validator';

export class CreatePlantDto {
  @IsString()
  readonly userId: string;
  @IsString()
  readonly picture: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly familyId: string;
  @IsString()
  readonly color: string;
  @IsString()
  readonly height: string;
  @IsString()
  readonly longitude: string;
  @IsString()
  readonly latitude: string;
  @IsString()
  readonly city: string;
  @IsString()
  readonly country: string;
  @IsString()
  readonly addedTime: string;
  @IsString()
  readonly edible: string;
}
