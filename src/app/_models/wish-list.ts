export class WishList {
    id: string;
    belongsToId: string;
    items: WishListItem[];
}

export class WishListItem {
    id: string;
    presentLink: string;
    title: string;
    topPick: boolean;
    image: string;
    price: number;
}