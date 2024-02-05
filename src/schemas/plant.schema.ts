import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';
import { Family } from './family.schema';

export type PlantDocument = HydratedDocument<Plant>;

@Schema()
export class Plant {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: User | Types.ObjectId;

  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Family' })
  familyId: Family | Types.ObjectId;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  height: string;

  @Prop({ required: true })
  longitude: string;

  @Prop({ required: true })
  latitude: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  addedTime: string;

  @Prop({ required: true })
  edible: string;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);
