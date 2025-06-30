import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("flutter_bill")
export class Bill {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
	id!: string;

  @Column({ name: "user_id", type: "varchar", comment: "用户id" })
	userId!: string;

  @Column({
		name: "total_asset",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "总资产",
	})
	totalAsset?: string;

  @Column({
		name: "net_asset",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "净资产",
	})
	netAsset?: string;

  @Column({
		name: "total_liability",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "总负债",
	})
	totalLiability?: string;

  @Column({
		name: "monthly_expense",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "月支出",
	})
	monthlyExpense?: string;

  @Column({
		name: "monthly_income",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "月收入",
	})
	monthlyIncome?: string;

  @Column({
		name: "monthly_balance",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "月结余",
	})
	monthlyBalance?: string;

  @Column({ name: "is_delete", type: "tinyint", comment: "软删除" })
	isDelete!: number;

	@CreateDateColumn({ name: "create_time", type: "datetime", comment: "创建时间" })
	createTime!: Date;

	@UpdateDateColumn({ name: "update_time", type: "datetime", comment: "更新时间" })
	updateTime!: Date;
}