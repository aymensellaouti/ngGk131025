import { Pipe, PipeTransform } from '@angular/core';
export const BTCUSD = 110850;
@Pipe({
  name: 'btc2usd'
})
export class Btc2usdPipe implements PipeTransform {

  transform(amount: number, isBtc2Usd = true): number {
    return isBtc2Usd ? amount * BTCUSD : amount / BTCUSD;
  }

}
