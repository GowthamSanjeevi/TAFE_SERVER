import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UnitDto } from './unit-dto';
import Unit from './unit.entity';
import { UnitService } from './unit.service';


@ApiTags('unit')
@Controller('unit')
export class UnitController {
    constructor(private unitService: UnitService) { }
    @Post('create')
    @ApiOperation({ summary: 'Add New Unit' })
    async createUnit(@Body() params: UnitDto) {
        return await this.unitService.createUnit(params)
    }

    @Get('all')
    @ApiOperation({ summary: "List all Unit" })
    async listAllUnit(): Promise<Unit> {
        return await this.unitService.listAllUnit()
    }

    @Get(':id')
    @ApiOperation({ summary: "Get Unit By Using Id" })
    async getUnitById(@Param('id') id: string) {
        return await this.unitService.getUnitById(id)
    }

    @Put(':id')
    @ApiBody({ type: UnitDto })
    @ApiOperation({ summary: "Update Unit By Using Id" })
    async updateUnitById(
        @Param('id') id: string,
        @Body() params: UnitDto,
    ): Promise<any> {
        return this.unitService.updateUnitById(id, params);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Delete Unit By Using Id" })
    async deleteUnitById(@Param("id") id: string) {
        return this.unitService.deleteUnitById(id);
    }
}
