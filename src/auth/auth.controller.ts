import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Param,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from 'src/user/user.service';
import { SocialSignupDto } from './dto/sign_up.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('signup')
  async signup(
    @Body() body: { name: string; email: string; password: string },
  ) {
    return this.authService.signup(body.name, body.email, body.password);
  }

  @Post('social-signup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async socialSignup(@Body() body: SocialSignupDto) {
    return this.authService.socialSignup(body);
  }

  @Post('signin')
  async signin(@Body() body: { email: string; password: string }) {
    return this.authService.signin(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile/:id')
  getProfile(@Param('id') id: number) {
    const user = this.userService.findUserById(id);
    if (user === null) {
      throw new Error('User not found');
    }
    return user;
  }
}
