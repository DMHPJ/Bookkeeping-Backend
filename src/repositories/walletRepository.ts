import { Repository } from "typeorm";
import { Wallet } from "@/entities/walletEntities";
import { AppDataSource } from "@/app";

export class WalletRepository {
	private repository: Repository<Wallet>;

	constructor() {
		this.repository = AppDataSource.getRepository(Wallet);
	}

	getWalletList = async (params: any): Promise<Wallet[]> => {
		// 实现账单列表查询逻辑
		return await this.repository.find({
			where: { ...params, isDelete: 0 },
			order: { createTime: "ASC" },
		});
	}

	addWallet = async (walletData: Partial<Wallet>): Promise<Wallet> => {
    console.log("repo", walletData)
		const wallet = this.repository.create(walletData);
		return await this.repository.save(wallet);
	}

	updateWallet = async (id: string, walletData: Partial<Wallet>): Promise<Wallet | null> => {
    console.log("repo2", walletData)
		await this.repository.update(id, walletData);
		return await this.repository.findOne({ where: { id } });
	}
}
