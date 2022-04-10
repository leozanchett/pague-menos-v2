import { Stock } from "./stock";

export interface Product {
   id: number;
   description: string;
   ean: string;
   stock: Stock;
   category: string;
}