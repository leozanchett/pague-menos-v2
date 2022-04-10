import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() {

  }

  precisaComprar(stock: Stock): String { 
    stock.needToBuy = stock.quantityNow <= stock.quantityMonthConsumption;
    return stock.needToBuy ? 'Sim' : 'Não'; 
  }

}
