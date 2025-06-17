import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('flutter_type')
export class Type {
  @BeforeInsert()
  generateId() {
    if(!this.id) this.id = uuid();
		if(!this.isDelete) this.isDelete = 0;
  }

  @PrimaryGeneratedColumn("uuid", { name: "id" })
	id?: string;

  @Column({ name: "bill_id", type: "varchar", length: 36, comment: "租户id" })
	billId!: string;

  @Column({ name: "parent_id", type: "varchar", length: 36, nullable: true, comment: "父结点id" })
  parentId?: string;

  @Column({ name: "parent_name", type: "varchar", nullable: true, comment: "父结点名称" })
  parentName?: string;

  @Column({ name: "parent_icon", type: "varchar", nullable: true, comment: "父结点图标" })
  parentIcon?: string;

  @Column({ name: "icon", type: "varchar", nullable: true, comment: "图标" })
  icon?: string;

  @Column({ name: "is_income", type: 'tinyint', comment: "是否为收入类型 0:支出/1:收入" })
  isIncome!: number;

  @Column({ name: "name", type: 'varchar', comment: "收支类型名称" })
  name!: string;

  @Column({ name: "is_delete", type: "tinyint", comment: "软删除" })
	isDelete!: number;

  @CreateDateColumn({ name: "create_time", type: "datetime", comment: "创建时间" })
	createTime!: Date;

	@UpdateDateColumn({ name: "update_time", type: "datetime", comment: "更新时间" })
	updateTime!: Date;

  children?: Type[];
}