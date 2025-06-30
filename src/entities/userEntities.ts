import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { uuid } from "uuidv4";

@Entity("flutter_user")
export class User {
	@BeforeInsert()
	generate() {
		if (!this.id) this.id = uuid();
		if (!this.isDelete) this.isDelete = 0;
	}

	@PrimaryGeneratedColumn("uuid", { name: "id" })
	id!: string;

	@Column({ unique: true, length: 50 })
	username!: string;

	@Column({ length: 100 })
	password!: string;

	@Column({ length: 50, nullable: true })
	nickname!: string;

	@Column({ name: "is_delete", type: "tinyint", comment: "软删除" })
	isDelete!: number;

	@CreateDateColumn({ name: "create_time", type: "datetime", comment: "创建时间" })
	createTime!: Date;

	@UpdateDateColumn({ name: "update_time", type: "datetime", comment: "更新时间" })
	updateTime!: Date;
}
