import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plant } from '../schemas/plant.schema';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class PlantsService {
  constructor(@InjectModel(Plant.name) private plantModel: Model<Plant>) {}

  async create(createPlantDto: CreatePlantDto): Promise<Plant> {
    const createdPlant = new this.plantModel({
      ...createPlantDto,
    });

    try {
      return await createdPlant.save();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la plant :', error);
      throw new BadRequestException('Erreur lors de la création de la plant');
    }
  }

  async findAll(): Promise<Plant[]> {
    return this.plantModel.find().exec();
  }

  async findOne(id: string): Promise<Plant> {
    return this.plantModel.findById(id).exec();
  }

  async update(id: string, updatePlantDto: UpdatePlantDto): Promise<Plant> {
    return this.plantModel
      .findByIdAndUpdate(id, updatePlantDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.plantModel.deleteOne({ _id: id }).exec();
  }
}
