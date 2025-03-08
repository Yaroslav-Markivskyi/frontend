export type CartProductType = {
    id: number;
    seller: string;
    title: string;
    price: number;
    available: number;
    image: string;
    quantity: number;
  };

export type CartType = {
    seller: string;
    items: CartProductType[];
  };


export type Person = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    deliveryDetails: string;
}

export type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export type PaymentMethod = "creditCard" | "paypal" | "cash";

export type ActiveCart = {
    seller: string;
    person: Person;
    address: Address;
    paymentMethod: PaymentMethod;
}
