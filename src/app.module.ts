import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProgramModule } from './program/program.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './organization/organization.module';
import { DivisionModule } from './division/division.module';
import { UnitModule } from './unit/unit.module';
import User from './user/user.entity';
import Program from './program/program.entity';
import Organization from './organization/organization.entity';
import Division from './division/division-entity';
import Supplier from './supplier/supplier.entity';
import { SupplierModule } from './supplier/supplier.module';
import { HelperService } from './shared/helper.sevice';
import Unit from './unit/unit.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tafe',
      entities: [
        User, Program, Organization,
        Division, Supplier, Unit
      ],
      synchronize: true,
      timezone: 'utc',
    }),
    AuthModule,
    UserModule,
    OrganizationModule,
    ProgramModule,
    AuthModule,
    OrganizationModule,
    DivisionModule,
    UnitModule,
    SupplierModule,
  ],
  controllers: [],
  providers: [HelperService],
})
export class AppModule { }
