import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("flutter_wallet_type")
export class WalletType {
	@PrimaryGeneratedColumn("uuid", { name: "id" })
	id!: string;

	@Column({ name: "name", type: "varchar", nullable: true, comment: "钱包类型名称" })
	name?: string;

	@Column({
		name: "type",
		type: "tinyint",
		nullable: true,
		comment:
			"钱包类型0:借记卡/1:支付宝/2:微信钱包/3:现金钱包/4:花呗/5:京东白条/6:公交卡/20:基金/21:股票/22:商品/30:报销/31:借出/40:借入/99:其他账户",
	})
	type?: number;

	@Column({
		name: "asset_type",
		type: "tinyint",
		nullable: true,
		comment: "资产类型0:资金/1:投资/2:应收/3:应付",
	})
	assetType?: number;

	@Column({
		name: "is_liabilities",
		type: "tinyint",
		nullable: true,
		comment: "是否为负债0:资产/1:负债",
	})
	isLiabilities?: number;

  @Column({ name: "is_delete", type: "tinyint", comment: "软删除" })
	isDelete!: number;

	@CreateDateColumn({ name: "create_time", type: "datetime", comment: "创建时间" })
	createTime!: Date;

	@UpdateDateColumn({ name: "update_time", type: "datetime", comment: "更新时间" })
	updateTime!: Date;
}
