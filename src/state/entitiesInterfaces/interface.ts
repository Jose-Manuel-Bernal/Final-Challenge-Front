export interface Provider {
  id?: string;
  name: string;
  phoneNumber: string;
}

export interface Product {
  id?: string;
  name: string;
  price: number;
  provider: Provider
}

