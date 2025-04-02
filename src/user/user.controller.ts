import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update_user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MatchFilter } from './dto/matches.dto';
@ApiTags('User')
@ApiBearerAuth()
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
  @Post('matches/:userId')
  @ApiOperation({ summary: 'matches' }) // ✅ Short description
  @ApiResponse({ status: 201, description: 'User Fetched successfully' })
  @ApiBody({
    type: MatchFilter,
  })
  async getMatches(
    @Param('userId') userId: number,
    @Body() filter: MatchFilter,
  ) {
    console.log(userId);
    return await this.userService.getMatches(userId, filter); // ✅ Pass user ID to service
  }

  // async getMatches(@Request() req: Request) {
  //   const userId = (req.user as { id: number }).id; // ✅ Extract user ID safely
  //   console.log(userId);
  //   return await this.userService.findAllUsers(); // ✅ Pass user ID to service
  // }
}
