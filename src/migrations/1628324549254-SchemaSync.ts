import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1628324549254 implements MigrationInterface {
    name = 'SchemaSync1628324549254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" ADD "description" character varying`);
        await queryRunner.query(`CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "public"."event" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e1de41532ad6af403d3ceb4f2" ON "public"."event" ("name", "type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_6e1de41532ad6af403d3ceb4f2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b535fbe8ec6d832dde22065ebd"`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" ADD "name" character varying NOT NULL`);
    }

}
