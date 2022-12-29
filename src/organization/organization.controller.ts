import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrganizationDto } from './organization-dto';
import Organization from './organization.entity';
import { OrganizationService } from './organization.service';


@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) { }

    @Post('create')
    @ApiOperation({ summary: "Add New  Organization" })
    async createOrg(@Body() params: OrganizationDto) {
        return await this.organizationService.createOrg(params)
    }

    @Get('all')
    @ApiOperation({ summary: "List all Organization" })
    async listAllOrg(): Promise<Organization> {
        return await this.organizationService.listAllOrg()
    }

    @Get(':id')
    @ApiOperation({ summary: "Get Organization By Using Id" })
    async getOrgById(@Param('id') id: string) {
        return await this.organizationService.getOrgById(id)
    }

    @Put(':id')
    @ApiBody({ type: OrganizationDto })
    @ApiOperation({ summary: "Update Organization Using Id" })
    async updateOrgById(
        @Param('id') id: string,
        @Body() params: OrganizationDto,
    ): Promise<any> {
        return this.organizationService.updateOrgById(id, params);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Delete Organization  By Using Id" })
    async deleteOrgById(@Param("id") id: string) {
        return this.organizationService.deleteOrgById(id);
    }
}
