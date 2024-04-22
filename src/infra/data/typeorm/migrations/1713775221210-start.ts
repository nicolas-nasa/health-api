import { MigrationInterface, QueryRunner } from "typeorm";

export class Start1713775221210 implements MigrationInterface {
    name = 'Start1713775221210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_a3b823a5bd22702133f73f2948b"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "enterpriseId"`);
        await queryRunner.query(`ALTER TABLE "enterprises" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "cnpj" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "enterprise_id" uuid`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_a9f13e18d0f16d9963546f5b525" FOREIGN KEY ("enterprise_id") REFERENCES "enterprises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_a9f13e18d0f16d9963546f5b525"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "enterprise_id"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "cnpj"`);
        await queryRunner.query(`ALTER TABLE "enterprises" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "enterpriseId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_a3b823a5bd22702133f73f2948b" FOREIGN KEY ("enterpriseId") REFERENCES "enterprises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
