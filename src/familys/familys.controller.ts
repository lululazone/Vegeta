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
  import { FamilysService } from './familys.service';
  import { CreateFamilyDto } from './dto/create-family.dto';
  import { UpdateFamilyDto } from './dto/update-family.dto';
  import { Family } from '../schemas/family.schema';
  import { JwtAuthGuard } from '../guards/jwt-auth.guard';
  
  @Controller('familys')
  export class FamilysController {
    constructor(private readonly familysService: FamilysService) {}
  
    @Get()
    async findAll(): Promise<Family[]> {
      try {
        return await this.familysService.findAll();
      } catch (error) {
        throw new HttpException(
          'Erreur lors de la récupération des familys',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async findOne(@Param('id') id: string): Promise<Family> {
      try {
        return await this.familysService.findOne(id);
      } catch (error) {
        throw new HttpException('Family non trouvé', HttpStatus.NOT_FOUND);
      }
    }
  
    @Post()
    async create(@Body() createFamilyDto: CreateFamilyDto): Promise<Family> {
      try {
        return await this.familysService.create(createFamilyDto);
      } catch (error) {
        throw new HttpException(
          'Erreur lors de la création de la family',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateFamilyDto: UpdateFamilyDto,
    ): Promise<Family> {
      try {
        return await this.familysService.update(id, updateFamilyDto);
      } catch (error) {
        throw new HttpException(
          'Erreur lors de la mise à jour de la family',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
      try {
        return await this.familysService.delete(id);
      } catch (error) {
        throw new HttpException(
          'Erreur lors de la suppression de la family',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
  