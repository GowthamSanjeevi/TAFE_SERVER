import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('unit')
export default class Unit extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    contact_name: string

    @Column()
    contact_no: number

    @Column()
    div_id: string

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
}