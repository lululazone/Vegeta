import { Get, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class ParisService {
  constructor(private httpService: HttpService) {}

  public appelExterne() {
    return this.httpService
      .get(
        'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/records?limit=100',
      )
      .pipe(map((response) => response.data));
  }
}
