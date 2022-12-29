import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { SupplierController } from './supplier.controller';
import Supplier from './supplier.entity';
import { SupplierService } from './supplier.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  providers: [SupplierService, HelperService],
  controllers: [SupplierController]
})
export class SupplierModule { }
