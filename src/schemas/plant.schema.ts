import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

enum PlantFamily {
    "Arbre",
    "Fleur",
    "Champignon",
    "Fougère",
    "Mousse",
    "Lichen",
    "Algue",
    "Inconnue"
}

export type PlantDocument = HydratedDocument<Plant>;

@Schema()
export class Plant {

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({default: PlantFamily.Inconnue})
  family: PlantFamily;

  @Prop({default: 0})
  height: number;

  @Prop({required: false})
  colors: Array<String>;

  @Prop({default: Date.now()})
  addedTime: Date;

  @Prop({require : true})
  lat: number;

  @Prop({require : true})
  long: number;

  @Prop({default : "Toulouse"})
  city: string;

  @Prop({default : "France"})
  country: string;

  @Prop({ default : "./assets/default_pict.png"})
  pictureLink: string;

  @Prop({ default : ""})
  description: string;

  @Prop({ default : false})
  isEdible: boolean;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);


