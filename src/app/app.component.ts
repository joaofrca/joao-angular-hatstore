import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'João Hat Store';
  itemsInCart = 0;
  products;

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.products = this.appService.get();
  }

  /**
   * Adds one unit in the header.
   */
  increaseItemsInCart() {
    console.log('inc');
    console.log(this.itemsInCart);
    // console.log(this.itemsInCart--);
    if (this.itemsInCart > 0) {
      return --this.itemsInCart;
    }
  }

  /**
   * Removes one unit in the header.
   */
  decreaseItemsInCart() {
    console.log('dec');
    console.log(this.itemsInCart);
    // console.log(++this.itemsInCart++);
    return ++this.itemsInCart;
  }
}
