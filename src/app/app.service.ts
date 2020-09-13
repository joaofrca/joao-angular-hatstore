import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  products = [
    {
      productName: 'João BEACH HAT',
      productDescription: 'This is to drink Caipirinhas.',
      imageURL: './assets/images/joaoHat_beach.jpg',
      stockQuantity: 16,
    },
    {
      productName: 'João Green HAT',
      productDescription: 'This one is green.',
      imageURL: './assets/images/joaoHat_green.jpg',
      stockQuantity: 7,
    },
    {
      productName: 'João Hunt HAT',
      productDescription: 'This is for hunting vegetables.',
      imageURL: './assets/images/joaoHat_hunt.jpg',
      stockQuantity: 4,
    },
    {
      productName: 'João Japanese HAT',
      productDescription: 'This one is from JAPAN!!',
      imageURL: './assets/images/joaoHat_japanese.jpg',
      stockQuantity: 0,
    },
    {
      productName: 'João PARTY-MODE HAT',
      productDescription: 'This is for partying.',
      imageURL: './assets/images/joaoHat_party.jpg',
      stockQuantity: 1,
    },
    {
      productName: 'João SARDINE HAT',
      productDescription: 'This is for eating sardines.',
      imageURL: './assets/images/joaoHat_sardine.jpg',
      stockQuantity: 6,
    },
  ];

  //constructor() {}

  get() {
    return this.products;
  }
}
