import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProgramDto } from './program-dto';
import Program from './program.entity';
import { ProgramService } from './program.service';

@ApiTags('program')
@Controller('program')
export class ProgramController {
    constructor(private programService: ProgramService) { }

    @Post('create')
    @ApiOperation({ summary: 'Add New Program' })
    async createProgram(@Body() params: ProgramDto) {
        return await this.programService.createProgram(params)
    }

    @Get('all')
    @ApiOperation({ summary: "List all Program" })
    async listAllPgrm(): Promise<Program> {
        return await this.programService.listAllPgrm()
    }
}
