
type ItemHistory = {
    id: number;
    product_name: string;
    quantity: number;
}

type CustomerHistory = {
    id: number;
    items: ItemHistory[];
    seller: string;
    status: string;
}

type SellerHistory = {
    id: number;
    items: ItemHistory[];
    customer: string;
    status: string;
}

export type { CustomerHistory, SellerHistory, ItemHistory };
