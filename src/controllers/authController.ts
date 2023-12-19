import { Controller, Post, Res, Req, HttpStatus } from '@nestjs/common';
import Authentificator from "../interfaces/authentification"
import userModel from "../models/user";
import { generateToken, clearToken } from "../utils/token";
import { HttpStatusCode } from '@angular/common/http';
import { Hash } from 'crypto';
import { Jwt } from 'jsonwebtoken';

@Controller('authController')
export class CatsController {
  @Post()
  login(@Req() req: Request, @Res() res: Response): Jwt | null {
    return null;
  }

  @Post()
  signup(@Req() req: Request, @Res() res: Response): Hash | null {
    return null;
  }

  @Post()
  authentificate(@Req() req: Request, @Res() res: Response): boolean {
    return false;
  }

  @Post()
  signout(@Req() req: Request, @Res() res: Response) {
    clearToken(res);
    //res.status(HttpStatus.OK).json({ message: "User logged out" });
  }

}