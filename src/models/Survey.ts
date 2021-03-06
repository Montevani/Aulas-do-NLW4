import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("surveys")
class Survey {

    @PrimaryColumn()
    readonly id: string; //é um uuid mas será passado como string já que estamos programando em ts
    
    @Column() //Se o nome da coluna for igual ao do atributo não é necessário passar nada
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    //Quando estiver criando um usoário se usa um novo id, quando se estiver editando, se usa o mesmo
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Survey }