import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import Division from './division-entity';
import { DivisionController } from './division.controller';
import { DivisionService } from './division.service';

@Module({
  imports: [TypeOrmModule.forFeature([Division])],
  providers: [DivisionService, HelperService],
  controllers: [DivisionController],
  exports: [DivisionService]
})
export class DivisionModule { }
