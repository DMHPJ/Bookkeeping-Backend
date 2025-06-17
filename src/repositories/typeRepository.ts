import { Repository } from "typeorm";
import { Type } from "@/entities/typeEntities";
import { AppDataSource } from "@/app";

export class TypeRepository {
	private repository: Repository<Type>;

	constructor() {
		this.repository = AppDataSource.getRepository(Type);
	}

	getTypeList = async (params: any): Promise<Type[]> => {
		return await this.repository.find({
			where: { isIncome: params.isIncome, isDelete: 0 },
			order: { createTime: "DESC" },
		});
	}

	addType = async (typeData: Partial<Type>): Promise<Type> => {
		const type = this.repository.create(typeData);
		return await this.repository.save(type);
	}

	updateType = async (id: string, typeData: Partial<Type>): Promise<Type | null> => {
		await this.repository.update(id, typeData);
		return await this.repository.findOne({ where: { id } });
	}
}
