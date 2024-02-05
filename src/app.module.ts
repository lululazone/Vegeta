import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User, UserSchema } from './schemas/user.schema';
import { Plant, PlantSchema } from './schemas/plant.schema';
import { Family, FamilySchema } from './schemas/family.schema';
import { AuthModule } from './auth/auth.module';
import { ParisService } from './paris/paris.service';
import { ParisController } from './paris/paris.controller';
import { HttpModule } from '@nestjs/axios';
import { PlantsService } from './plants/plants.service';
import { FamilysService } from './familys/familys.service';
import { FamilysController } from './familys/familys.controller';
import { PlantsController } from './plants/plants.controller';
import { AvatarService } from './avatar/avatar.service';
import { AvatarController } from './avatar/avatar.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vegetaynov:J98bPlfBC25cJyZY@vegeta.5qvrdgr.mongodb.net/?retryWrites=true&w=majority',
      // 'mongodb+srv://vegetaynov:tJlaKyQCQv4hpIA3@vegeta.5qvrdgr.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Plant.name, schema: PlantSchema }]),
    MongooseModule.forFeature([{ name: Family.name, schema: FamilySchema }]),
    AuthModule,
    HttpModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ParisController,
    FamilysController,
    PlantsController,
    AvatarController,
  ],
  providers: [
    AppService,
    UsersService,
    ParisService,
    PlantsService,
    FamilysService,
    AvatarService,
  ],
})
export class AppModule {}
