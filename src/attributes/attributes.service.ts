import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'database/database.service';

@Injectable()
export class AttributesService {
  constructor(private prisma: DatabaseService) {}

  create(createAttributeDto: Prisma.AttributeCreateInput) {
    return this.prisma.attribute.create({ data: createAttributeDto });
  }

  async bulkCreateAttributes(attributes: { name: string }[]) {
    return this.prisma.attribute.createMany({
      data: attributes,
      skipDuplicates: true,
    });
  }

  findAll() {
    return this.prisma.attribute.findMany();
  }

  findOne(id: number) {
    return this.prisma.attribute.findUnique({ where: { id } });
  }

  update(id: number, updateAttributeDto: Prisma.AttributeUpdateInput) {
    return this.prisma.attribute.update({
      where: { id },
      data: updateAttributeDto,
    });
  }

  remove(id: number) {
    return this.prisma.attribute.delete({ where: { id } });
  }
}
