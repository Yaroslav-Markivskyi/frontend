type CartProduct = {
    id: number;
    seller: string;
    title: string;
    price: number;
    available: number;
    image: string;
    quantity: number;
  };

type Order = {
    seller: string;
    items: CartProduct[];
  };

export type { CartProduct, Order };
