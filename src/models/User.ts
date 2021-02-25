import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("users")

class User {

    @PrimaryColumn()
    id: string; //é um uuid mas será passado como string já que estamos programando em ts
    
    @Column() //Se o nome da coluna for igual ao do atributo não é necessário passar nada
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date
}

export {User};