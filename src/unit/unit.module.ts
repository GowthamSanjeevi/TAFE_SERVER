import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { UnitController } from './unit.controller';
import Unit from './unit.entity';
import { UnitService } from './unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  controllers: [UnitController],
  providers: [UnitService, HelperService]
})
export class UnitModule { }
