import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    return this.prismaService.profile.create({
      data: createProfileDto,
    });
  }

  async findAll() {
    return this.prismaService.profile.findMany({
      include: {user:true},
    });
  }

  async findOne(id: number) {
    return this.prismaService.profile.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prismaService.profile.update({
      where: {id},
      data: updateProfileDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.profile.delete({
      where: {id},
    });
  }
}