import { TypeRepository } from "@/repositories/typeRepository";
import { Type, TypeResponse } from "@/entities/typeEntities";

export class TypeService {
	private typeRepository: TypeRepository;

	constructor() {
		this.typeRepository = new TypeRepository();
	}

	getTypeList = async (params: any): Promise<TypeResponse[]> => {
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

	addType = async (typeData: Partial<Type>): Promise<TypeResponse> => {
		return await this.typeRepository.addType(typeData);
	}

	updateType = async (typeData: Partial<Type>): Promise<TypeResponse | null> => {
		return await this.typeRepository.updateType(typeData.id!, typeData);
	}
}
