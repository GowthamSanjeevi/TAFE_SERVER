import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { ProgramController } from './program.controller';
import Program from './program.entity';
import { ProgramService } from './program.service';

@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  controllers: [ProgramController],
  providers: [ProgramService, HelperService]
})
export class ProgramModule { }
