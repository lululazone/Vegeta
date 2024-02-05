import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Family } from '../schemas/family.schema';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class FamilysService {
  constructor(@InjectModel(Family.name) private familyModel: Model<Family>) {}

  async create(createFamilyDto: CreateFamilyDto): Promise<Family> {
    const createdFamily = new this.familyModel({
      ...createFamilyDto,
    });

    try {
      return await createdFamily.save();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la family :', error);
      throw new BadRequestException('Erreur lors de la création de la family');
    }
  }

  async findAll(): Promise<Family[]> {
    return this.familyModel.find().exec();
  }

  async findOne(id: string): Promise<Family> {
    return this.familyModel.findById(id).exec();
  }

  async update(id: string, updateFamilyDto: UpdateFamilyDto): Promise<Family> {
    return this.familyModel
      .findByIdAndUpdate(id, updateFamilyDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.familyModel.deleteOne({ _id: id }).exec();
  }
}
