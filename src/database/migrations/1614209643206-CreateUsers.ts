import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614209643206 implements MigrationInterface {

    //Cria
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar", //string, não pode ser nulo
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()", //O próprio banco de dados irá se encarregar de atribuir a data de criação
                    }
                ]
            })
        )
    }

    //Destrói
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
