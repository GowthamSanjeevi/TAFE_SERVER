import { ApiProperty } from "@nestjs/swagger";

export class ProgramDto {

    @ApiProperty()
    readonly id: string

    @ApiProperty()
    readonly name: string

    @ApiProperty()
    readonly model_name: string
}