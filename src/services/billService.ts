import { BillChrRepository } from "@/repositories/billChrRepository";
import { BillRepository } from "@/repositories/billRepository";
import { WalletRepository } from "@/repositories/walletRepository";

export class BillService {
	private billRepository: BillRepository;
	private billChrRepository: BillChrRepository;
	private walletRepository: WalletRepository;

	constructor() {
		this.billRepository = new BillRepository();
		this.billChrRepository = new BillChrRepository();
		this.walletRepository = new WalletRepository();
	}

	getBillInfo = async (params: any): Promise<any> => {
		const mainRes = await this.billRepository.getBillInfo(params);
		if (!mainRes.id) throw new Error("账单不存在");
		await Promise.all([
      this.billChrRepository.getBillChrList({ billId: mainRes.id }),
      this.walletRepository.getWalletList({ billId: mainRes.id })
    ]).then(([billChrRes, walletRes]) => {
      mainRes.billChrList = billChrRes;
      mainRes.walletList = walletRes;
    })
		return mainRes;
	}
}
