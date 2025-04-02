import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'database/database.service';

@Injectable()
export class FavouriteService {
  constructor(private readonly prisma: DatabaseService) {}
  create(userId: number) {
    return this.prisma.favourite.create({ data: { userId: Number(userId) } });
  }

  findAll() {
    return this.prisma.favourite.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} favourite`;
  }

  update(id: number, updateFavouriteDto: Prisma.FavouriteUpdateInput) {
    return this.prisma.favourite.update({
      where: { id },
      data: updateFavouriteDto,
    });
  }

  remove(id: number) {
    return this.prisma.favourite.delete({ where: { id: Number(id) } });
  }
}
