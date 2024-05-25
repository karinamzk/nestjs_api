import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto'

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const { name, courseIds } = createStudentDto;
    return this.prismaService.student.create({
      data: {
        name,
        courses: {
          connect: courseIds.map((id) => ({ id })),
        },
      },
    });
  }

  async findAll() {
    return this.prismaService.student.findMany({
      include: { courses: true },
    });
  }

  async findOne(id: number) {
    return this.prismaService.student.findUnique({
      where: { id },
      include: { courses: true },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const { name, courseIds } = updateStudentDto;
    return this.prismaService.student.update({
      where: { id },
      data: {
        name,
        courses: {
          set: courseIds.map((id) => ({ id })),
        },
      },
    });
  }

  async remove(id: number) {
    return this.prismaService.student.delete({
      where: { id },
    });
  }
}
