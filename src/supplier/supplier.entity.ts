import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('supplier')
export default class Supplier extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    contact_no: number

    @Column()
    email_id: string

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