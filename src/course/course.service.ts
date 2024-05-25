import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prismaService: PrismaService) {}
  
  async create(createCourseDto: CreateCourseDto) {
    const { title, studentIds } = createCourseDto;

    // Verifica se studentIds está definido e não está vazio
    if (studentIds && studentIds.length > 0) {
        // Cria o curso e conecta os alunos associados
        return this.prismaService.course.create({
            data: {
                title,
                students: { // Use 'students' para criar um relacionamento NxN com os alunos
                    connect: studentIds.map(id => ({ id })),
                },
            },
        });
    } else {
        // Se studentIds estiver vazio ou não definido, cria apenas o curso
        return this.prismaService.course.create({
            data: {
                title,
            },
        });
    }
}

  async findAll() {
    return this.prismaService.course.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.course.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prismaService.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.course.delete({
      where: { id },
    });
  }
}
