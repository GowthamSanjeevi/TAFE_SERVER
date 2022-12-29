import { Injectable } from '@nestjs/common';
import { HelperService } from 'src/shared/helper.sevice';
import { UserService } from 'src/user/user.service';
import { LogInDto } from './login-dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private helperService: HelperService) { }

    async validateUser(loginRequest: LogInDto): Promise<any> {
        if (loginRequest.username == "tafe" && loginRequest.password == "12345") {
            return this.userService.login(loginRequest.username, loginRequest.password)
        }
        return this.helperService.jsonReponse(false, "Invalid Credentials")
    }
}