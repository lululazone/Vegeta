import { Get, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AvatarService {
  constructor(private httpService: HttpService) {}

public appelExterne(nomber: number) {
    const urls = [];
    for (let i = 0; i < nomber; i++) {
        urls.push(`https://api.dicebear.com/7.x/pixel-art/svg?seed=${Math.random()}`);
    }
    return urls;
}
}