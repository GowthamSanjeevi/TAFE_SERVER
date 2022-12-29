import { ApiProperty } from "@nestjs/swagger";

export class OrganizationDto {

    @ApiProperty()
    id: string

    @ApiProperty()
    readonly name: string

    @ApiProperty()
    readonly contact_name: string

    @ApiProperty()
    readonly contact_no: number

    @ApiProperty()
    readonly build_no: string

    @ApiProperty()
    readonly street: string

    @ApiProperty()
    readonly area: string

    @ApiProperty()
    readonly city: string

    @ApiProperty()
    readonly state: string

    @ApiProperty()
    readonly pincode: number

    @ApiProperty()
    readonly domain_name: string
}