import { ApiProperty } from "@nestjs/swagger";

export class LogInDto {
    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly password: string;
}