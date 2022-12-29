import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { OrganizationController } from './organization.controller';
import Organization from './organization.entity';
import { OrganizationService } from './organization.service';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  providers: [OrganizationService, HelperService],
  controllers: [OrganizationController],
  exports: [
    OrganizationService
  ]
})
export class OrganizationModule { }
