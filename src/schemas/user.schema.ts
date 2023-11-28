import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  first: string;

  @Prop({ required: true })
  last: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default : "./assets/default_pict.png"})
  pictureLink: string;

  @Prop({ default : ""})
  description: string;

  @Prop({ default : false})
  isAdmin: boolean;

  comparePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
  
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) { return next();}
});

UserSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.verify(enteredPassword, this["password"]);
};


