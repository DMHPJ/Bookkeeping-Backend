import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("flutter_wallet")
export class Wallet {
	@PrimaryGeneratedColumn("uuid", { name: "id" })
	id!: string;

	@Column({ name: "bill_id", type: "varchar", comment: "主表id" })
	billId!: string;

	@Column({
		name: "wallet_type",
		type: "tinyint",
		nullable: true,
		comment:
			"资产钱包类型0:借记卡/1:支付宝/2:微信钱包/3:现金钱包/4:花呗/5:京东白条/6:公交卡/20:基金/21:股票/22:商品/30:报销/31:借出/40:借入/99:其他账户",
	})
	walletType?: number;

	@Column({
		name: "wallet_type_name",
		type: "varchar",
		nullable: true,
		comment: "资产钱包类型名称",
	})
	walletTypeName?: string;

	@Column({
		name: "wallet_type_icon",
		type: "varchar",
		nullable: true,
		comment: "资产钱包类型图标",
	})
	walletTypeIcon?: string;

	@Column({ name: "wallet_name", type: "varchar", nullable: true, comment: "资产名称" })
	walletName?: string;

	@Column({
		name: "wallet_amount",
		type: "decimal",
		precision: 17,
		scale: 2,
		nullable: true,
		comment: "资产金额",
	})
	walletAmount?: string;

	@Column({ name: "show_wallet", type: "tinyint", comment: "是否展示该资产 0:否/1:是" })
	showWallet!: number;

	@Column({ name: "add_calculate", type: "tinyint", comment: "是否参与总资产计算 0:否/1:是" })
	addCalculate!: number;

	@Column({ name: "is_delete", type: "tinyint", comment: "软删除" })
	isDelete!: number;

	@CreateDateColumn({ name: "create_time", type: "datetime", comment: "创建时间" })
	createTime!: Date;

	@UpdateDateColumn({ name: "update_time", type: "datetime", comment: "更新时间" })
	updateTime!: Date;
}
