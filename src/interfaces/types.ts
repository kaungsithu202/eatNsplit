export interface IFriend {
	id: string;
	name: string;
	image: string;
	balance: number;
}

export interface IFriendList {
	friends: IFriend[];
}
