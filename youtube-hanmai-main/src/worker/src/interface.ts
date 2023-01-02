export interface MemberData {
	id: number,
	name: string,
	email: string,
	joinDate: number,
	leaveDate: number | null,
	transfers?: TransferData[]
	amountLeft?: number
	payCount?: number
	skipCount?: number
	note: string | null
}

export interface HomeData {
	homeNumber: number,
	name: string,
	members?: MemberData[]
	rowData?: any
	price: number
}

export interface TransferData {
	id: string,
	memberId: number,
	homeNumber: number,
	amount: number,
	time: number
}

export interface TransferBody {
	barcodeId: string,
	memberId: string,
	homeId: string
	time?: number
}

export interface HomeJoinInfo {
    homeNumber: number,
    memberId: number,
	joinAt: number
}