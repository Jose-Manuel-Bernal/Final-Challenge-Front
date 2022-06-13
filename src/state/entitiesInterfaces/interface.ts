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

export interface Inventory {
  id?: string
  max: number
  min: number
  stock: number
  product: Product
}