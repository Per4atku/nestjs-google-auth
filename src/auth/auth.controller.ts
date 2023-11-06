import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect() {}

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return this.authService.loginViaGoogle(req);
  }
}
