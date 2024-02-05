import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from '../schemas/plant.schema';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get()
  async findAll(): Promise<Plant[]> {
    try {
      return await this.plantsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Erreur lors de la récupération des plants',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<Plant> {
    try {
      return await this.plantsService.findOne(id);
    } catch (error) {
      throw new HttpException('Plant non trouvé', HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async create(@Body() createPlantDto: CreatePlantDto): Promise<Plant> {
    try {
      return await this.plantsService.create(createPlantDto);
    } catch (error) {
      throw new HttpException(
        'Erreur lors de la création de la plant',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlantDto: UpdatePlantDto,
  ): Promise<Plant> {
    try {
      return await this.plantsService.update(id, updatePlantDto);
    } catch (error) {
      throw new HttpException(
        'Erreur lors de la mise à jour de la plant',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    try {
      return await this.plantsService.delete(id);
    } catch (error) {
      throw new HttpException(
        'Erreur lors de la suppression de la plant',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
