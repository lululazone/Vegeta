// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    const userData = user;

    if (userData && (await bcrypt.compare(password, userData.password))) {
      const { ...result } = userData;

      // Génère un token JWT
      const payload = { email: result.email };
      const token = this.jwtService.sign(payload);

      return {
        user,
        token,
      };
    }

    throw new UnauthorizedException('Identifiants invalides');
  }
}
