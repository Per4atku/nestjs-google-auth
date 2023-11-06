import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private prisma: PrismaService,
  ) {}
  @Get('all')
  @UseGuards(AuthGuard('jwt'))
  async getAllUsers() {
    return this.prisma.user.findMany({});
  }
}
