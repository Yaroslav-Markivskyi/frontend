export type PostRequest = {
    title: string;
    description: string;
    price: string;
    quantity: string;
    images_files: File[];
  };  
  
  export type PostResponse = {
    id: number;
    seller: string;
    title: string;
    description: string;
    images_urls: [];
    price: number;
    quantity: number;
    currency: string;
  };
  