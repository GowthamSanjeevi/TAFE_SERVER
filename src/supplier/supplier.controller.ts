import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SupplierDto } from './supplier-dto';
import Supplier from './supplier.entity';
import { SupplierService } from './supplier.service';

@ApiTags('supplier')
@Controller('supplier')
export class SupplierController {
    constructor(private readonly supplierService: SupplierService) { }

    @Post('create')
    @ApiOperation({ summary: "Add New Supplier" })
    async createSupplier(@Body() params: SupplierDto) {
        return this.supplierService.createSupplier(params)
    }

    @Get('all')
    @ApiOperation({ summary: "List All Supplier" })
    async listAllSupplier(): Promise<Supplier> {
        return await this.supplierService.listAllSupplier()
    }
}
