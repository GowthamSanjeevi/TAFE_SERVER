import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly desc: string;
}

export class PartialUserDto {

    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly desc: string;
}