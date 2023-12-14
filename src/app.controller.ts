import { Body, Controller, Post } from '@nestjs/common';
import { CreateMembersBody } from './dtos/create-members-body';
import { MembersRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {
  constructor(private membersRepository: MembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateMembersBody) {
    const { name, function: memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);
  }
}
