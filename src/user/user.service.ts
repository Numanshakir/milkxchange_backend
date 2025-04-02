import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'database/database.service';
import { SocialSignupDto } from 'src/auth/dto/sign_up.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { MatchFilter } from './dto/matches.dto';

@Injectable()
export class UserService {
  constructor(private prisma: DatabaseService) {}

  async createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
  }
  async updatePassword(
    id: number,
    name?: string,
    email?: string,
    newPassword?: string,
  ) {
    return this.prisma.user.update({
      where: { id },
      data: { email, password: newPassword, name },
    });
  }
  async createSocialUser(dto: SocialSignupDto) {
    return this.prisma.user.create({
      data: { email: dto.email, name: dto.name, uid: dto.uid },
    });
  }
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: updateUserDto,
    });
  }

  async findUserByUID(uid: string) {
    return this.prisma.user.findUnique({
      where: { uid },
    });
  }
  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async findUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      return null;
    }
    const attributes = await this.prisma.attribute.findMany({
      where: { id: { in: user.attributes.map(Number) } },
    });
    return { ...user, attributes };
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async getMatches(userId: number, filter: MatchFilter) {
    const user = await this.findUserById(userId);
    console.log(filter);
    if (user) {
      return this.prisma.user.findMany({
        where: {
          id: {
            not: Number(userId),
          },
          account_type: {
            not: user.account_type,
          },
          attributes: {
            hasSome: filter.attributes.map(Number),
          },
        },
      });
    }
  }
}
