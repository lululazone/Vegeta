import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FamilyDocument = HydratedDocument<Family>;

@Schema()
export class Family {
  @Prop({ required: true })
  name: string;
}

export const FamilySchema = SchemaFactory.createForClass(Family);
