export interface Purchase {
   id: number;
   unitPrice: number;
   quantity: number;
   purchaseDate: Date;
   totalPrice: number;
   productDescription: string;
   establishmentDescription: string;
   ean: string;
}