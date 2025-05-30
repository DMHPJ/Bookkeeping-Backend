import { TypeRepository } from "@/repositories/typeRepository";
import { Type } from "@/entities/typeEntities";

export class TypeService {
	private typeRepository: TypeRepository;

	constructor() {
		this.typeRepository = new TypeRepository();
	}

	async getTypeList(params: any): Promise<Type[]> {
		const res = await this.typeRepository.getTypeList(params);

		const parentList = res.filter((item) => !item.parentId);
		const childList = res.filter((item) => item.parentId);
		// 关联父子项
		childList.forEach((item) => {
			const pItemIndex = parentList.findIndex((pItem) => pItem.id === item.parentId);
			if (pItemIndex > -1) {
				parentList[pItemIndex].children = [...(parentList[pItemIndex].children || []), item];
			}
		});

		return parentList.map((item) => {
			return {
				...item,
				children: item.children || [],
			};
		});
	}

	async addType(typeData: Partial<Type>): Promise<Type> {
		return await this.typeRepository.addType(typeData);
	}

	async updateType(typeData: Partial<Type>): Promise<Type | null> {
		return await this.typeRepository.updateType(typeData.id!, typeData);
	}
}
