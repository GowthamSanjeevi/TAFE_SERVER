import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProgramDto } from 'src/program/program-dto';
import { PartialUserDto, UserDto } from './user-dto';
import User from './user.entity';

import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('create')
    @ApiOperation({ summary: "Add New User" })
    async createUser(@Body() params: UserDto) {
        return await this.userService.createUser(params)
    }

    @Get('all')
    @ApiOperation({ summary: "List All User" })
    async listAllUser(): Promise<User> {
        return await this.userService.listAllUser()
    }

    @Get(':id')
    @ApiOperation({ summary: "Get User By Using Id" })
    async getUserById(@Param('id') id: number) {
        return await this.userService.getUserById(id)
    }

    @Get(':id/name')
    @ApiOperation({ summary: "Get User By Id Using Selected Field" })
    async getUserByIdSelectField(@Param('id') id: number) {
        return await this.userService.getUserByIdSelectField(id)
    }

    @Put(':id')
    @ApiBody({ type: PartialUserDto })
    @ApiOperation({ summary: "Update User Using Id" })
    async updateUserById(
        @Param('id') id: number,
        @Body() params: UserDto
    ) {
        return this.userService.updateUserById(id, params);
    }

    @Post(':id/program')
    @ApiOperation({ summary: "Add Program by Using UserId" })
    async createUserProgram(
        @Param('id') id: number,
        @Body() pgrm: ProgramDto) {
        return this.userService.createUserProgramById(id, pgrm)
    }

}
