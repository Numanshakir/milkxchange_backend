import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update_user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  updateUser(
    @Param('id') id: number,
    @Body(ValidationPipe) body: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('matches/:userId')
  async getMatches(@Param('userId') userId: number) {
    console.log(userId);
    return await this.userService.getMatches(userId); // ✅ Pass user ID to service
  }

  // async getMatches(@Request() req: Request) {
  //   const userId = (req.user as { id: number }).id; // ✅ Extract user ID safely
  //   console.log(userId);
  //   return await this.userService.findAllUsers(); // ✅ Pass user ID to service
  // }
}
