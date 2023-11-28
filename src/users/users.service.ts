import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Créer un utilisateur
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  // Obtenir tous les utilisateurs
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Obtenir un utilisateur par son ID
  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  // Mettre à jour un utilisateur
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  // Supprimer un utilisateur
  async delete(id: string): Promise<any> {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}
