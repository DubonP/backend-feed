import { Post, Body, Controller } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './models/register.dto';

@Controller()
export class AuthController {
  constructor(private userService: UserService) {}
  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.userService.create(body);
  }
}
