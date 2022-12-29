import { Module } from '@nestjs/common';
import { HelperService } from 'src/shared/helper.sevice';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';


@Module({
  controllers: [AuthController],
  imports: [UserModule],
  providers: [AuthService, HelperService],
  exports: [AuthService]
})
export class AuthModule { }
