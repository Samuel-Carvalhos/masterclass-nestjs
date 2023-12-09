import { Controller, Get, Body } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateMembersBody } from './database/dtos/create.members';
@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(@Body() body: CreateMembersBody) {
    const { name, function: memberFunction } = body;

    const member = await this.prisma.members.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });

    return {
      member,
    };
  }
}
