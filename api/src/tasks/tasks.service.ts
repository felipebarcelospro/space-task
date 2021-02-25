import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from '../prisma.service';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  findAll() {
    return this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
