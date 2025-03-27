import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'database/database.service';
import { SocialSignupDto } from 'src/auth/dto/sign_up.dto';

@Injectable()
export class UserService {
  constructor(private prisma: DatabaseService) {}

  async createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
  }

  async createSocialUser(dto: SocialSignupDto) {
    return this.prisma.user.create({
      data: { email: dto.email, name: dto.name, uid: dto.uid },
    });
  }

  async findUserByUID(uid: string) {
    return this.prisma.user.findUnique({ where: { uid } });
  }
  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async findUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id: Number(id) }, // ✅ This ensures `id` remains a number
    });
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }
}
