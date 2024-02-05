// mon.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { AvatarService } from './avatar.service';

@Controller('avatar')
export class AvatarController {
    constructor(private monService: AvatarService) {}

    @Get(':number')
    getData(@Param('number') number: number) {
        return this.monService.appelExterne(number);
    }
}
