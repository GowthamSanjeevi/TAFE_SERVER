import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DivisionDto } from './division-dto';
import Division from './division-entity';
import { DivisionService } from './division.service';


@ApiTags('Division')
@Controller('division')
export class DivisionController {
    constructor(private readonly divisionService: DivisionService) { }

    @Post('create')
    @ApiOperation({ summary: "Add New Division" })
    async createDiv(@Body() params: DivisionDto) {
        return await this.divisionService.createDiv(params)
    }

    @Get('all')
    @ApiOperation({ summary: "List all Division" })
    async listAllOrg(): Promise<Division> {
        return await this.divisionService.listAllDiv()
    }

    @Get(':id')
    @ApiOperation({ summary: "Get Division By Using Id" })
    async getDivById(@Param('id') id: string) {
        return await this.divisionService.getDivById(id)
    }

    @Put(':id')
    @ApiBody({ type: DivisionDto })
    @ApiOperation({ summary: "Update Division By Using Id" })
    async updateDivById(
        @Param('id') id: string,
        @Body() params: DivisionDto,
    ): Promise<any> {
        return this.divisionService.updateDivById(id, params);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Delete Division By Using Id" })
    async deleteOrgById(@Param("id") id: string) {
        return this.divisionService.deleteDivById(id);
    }
}
