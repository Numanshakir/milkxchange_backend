import {
  Body,
  Controller,
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
}
