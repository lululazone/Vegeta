// mon.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ParisService } from './paris.service';

@Controller('paris')
export class ParisController {
  constructor(private monService: ParisService) {}

  @Get()
  getData() {
    console.log('test', this.monService.appelExterne());

    return this.monService.appelExterne();
  }
}
