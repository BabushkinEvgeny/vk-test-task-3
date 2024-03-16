export interface IGood {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
  }
  
  export interface CartState {
    items: IGood[];
    total: number;
  }