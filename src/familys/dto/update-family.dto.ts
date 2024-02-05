import { IsString } from 'class-validator';

export class UpdateFamilyDto {
  @IsString()
  readonly name: string;
}
