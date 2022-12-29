import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LogInDto } from './login-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("login")
    @ApiOperation({ summary: "User LogIn" })
    @ApiBody({ type: LogInDto })
    async login(@Body() loginRequest: LogInDto) {
        return this.authService.validateUser(loginRequest)
    }
}
