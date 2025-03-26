import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'database/database.service';

@Injectable()
export class UserService {
  constructor(private prisma: DatabaseService) {}

  async createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: { email, password: hashedPassword },
    });
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async findUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id: Number(id) }, // ✅ This ensures `id` remains a number
    });
  }
}
