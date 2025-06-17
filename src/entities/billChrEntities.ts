import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("flutter_bill_chr")
export class BillChr {
	@PrimaryGeneratedColumn("uuid", { name: "id" })
	id!: string;

	@Column({ name: "bill_id", type: "varchar", length: 36, comment: "租户id" })
	billId!: string;

	@Column({ name: "icon", type: "varchar", nullable: true, comment: "图标" })
	icon?: string;

	@Column({
		name: "money",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "金额",
	})
	money?: number;

	@Column({ name: "category_id", type: "varchar", nullable: true, comment: "收支类型id" })
	categoryId?: string;

	@Column({ name: "category_name", type: "varchar", nullable: true, comment: "收支类型名称" })
	categoryName?: string;

	@Column({
		name: "transaction_type",
		type: "tinyint",
		nullable: true,
		comment: "交易类型1:收入/2:支出/3:内部转账/",
	})
	transactionType?: number;

	@Column({ name: "money_from", type: "varchar", nullable: true, comment: "金额来源" })
	moneyFrom?: string;

	@Column({ name: "money_to", type: "varchar", nullable: true, comment: "金额去向" })
	moneyTo?: string;

	@Column({ name: "remark", type: "varchar", nullable: true, comment: "备注" })
	remark?: string;

	@Column({ name: "owning_date", type: "datetime", nullable: true, comment: "账单时间" })
	owningDate?: Date;

	@Column({ name: "is_delete", type: "tinyint", comment: "软删除" })
	isDelete!: number;

	@CreateDateColumn({ name: "create_time", type: "datetime", comment: "创建时间" })
	createTime!: Date;

	@UpdateDateColumn({ name: "update_time", type: "datetime", comment: "更新时间" })
	updateTime!: Date;
}
