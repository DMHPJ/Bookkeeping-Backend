import { Wallet } from "@/entities/walletEntities";
import { WalletRepository } from "@/repositories/walletRepository";

export class WalletService {
	private walletRepository: WalletRepository;

	constructor() {
		this.walletRepository = new WalletRepository();
	}

	getWalletList = async (params: any): Promise<Wallet[]> => {
		return await this.walletRepository.getWalletList(params);
	}

	addWallet = async (walletData: Partial<Wallet>): Promise<Wallet> => {
		return await this.walletRepository.addWallet(walletData);
	}

	updateWallet = async (walletData: Partial<Wallet>): Promise<Wallet | null> => {
		return await this.walletRepository.updateWallet(walletData.id!, walletData);
	}
}
