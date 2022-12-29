import { ApiProperty } from "@nestjs/swagger";

export class SupplierDto {

    @ApiProperty()
    id: string

    @ApiProperty()
    readonly name: string

    @ApiProperty()
    readonly contact_no: number

    @ApiProperty()
    readonly email_id: string

    @ApiProperty()
    readonly build_no: string

    @ApiProperty()
    readonly street: string

    @ApiProperty()
    readonly area: string

    @ApiProperty()
    readonly city: string

    @ApiProperty()
    readonly pincode: number

    @ApiProperty()
    readonly state: string

}