export interface CheaperProduct {
  id: number;
  description: string;
  ean: string;
  quantity: number;
  monthConsumption: number;
  establishmentLowestPrice: number;
  dateLowestPrice: Date;
  price: number;
  needToBuy: boolean;
}