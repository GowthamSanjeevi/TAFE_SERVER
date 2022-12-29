import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user.entity';
import { HelperService } from 'src/shared/helper.sevice';
import Program from 'src/program/program.entity';



@Module({
  imports: [TypeOrmModule.forFeature([User, Program])],
  providers: [UserService, HelperService],
  controllers: [UserController],
  exports: [
    UserService
  ]
})
export class UserModule { }
