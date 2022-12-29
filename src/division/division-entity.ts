import { Optional } from "@nestjs/common";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('division')
export default class Division extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    contact_name: string

    @Column()
    contact_no: number

    @Column()
    build_no: string

    @Column()
    street: string

    @Column()
    area: string

    @Column()
    city: string

    @Column()
    pincode: number

    @Column()
    state: string

    // @Optional()
    // @Column()
    // status: string

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_on: Date;
}