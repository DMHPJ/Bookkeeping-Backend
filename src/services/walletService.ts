import { Wallet } from "@/entities/walletEntities";
import { WalletRepository } from "@/repositories/walletRepository";

export class WalletService {
	private walletRepository: WalletRepository;

	constructor() {
		this.walletRepository = new WalletRepository();
		console.log("service", this)
	}

	getWalletList = async (params: any): Promise<Wallet[]> => {
    console.log("service", this)
		return await this.walletRepository.getWalletList(params);
	}

	addWallet = async (walletData: Partial<Wallet>): Promise<Wallet> => {
    console.log("service", this);
    console.log("service", walletData);
		return await this.walletRepository.addWallet(walletData);
	}

	updateWallet = async (walletData: Partial<Wallet>): Promise<Wallet | null> => {
		return await this.walletRepository.updateWallet(walletData.id!, walletData);
	}
}
