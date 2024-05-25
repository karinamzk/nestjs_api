import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  
  async create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data:{
        name: createUserDto.name,
        profile: {
          connect: {id: createUserDto.profileId},
        }
      }
    });
  }

  async findAll() {
    return this.prismaService.user.findMany({
      include: { profile:true},
    });
  }

  async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: {id},
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.user.delete({
      where: {id},
    });
  }
}
