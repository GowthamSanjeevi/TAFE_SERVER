import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('program')
export default class Program extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    model_name: string

}