import Program from "src/program/program.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    desc: string

    @OneToOne(() => Program)
    @JoinColumn()
    program: Program

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_on: Date;
}