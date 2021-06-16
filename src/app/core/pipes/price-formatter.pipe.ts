import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter'
})
export class PriceFormatterPipe implements PipeTransform {

  //1000den sonra 1,000 olarak gözükecek. 10.99 gibiyse virgülden sonra 2 tane gözükecek.
  transform(price: number): string {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

}
