import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('organization')
export default class Organization extends BaseEntity {

    // @PrimaryGeneratedColumn()
    // id: number


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
    city: string

    @Column()
    state: string

    @Column()
    pincode: number

    @Column()
    area: string

    @Column()
    domain_name: string


    @Column({
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_on: Date;
}