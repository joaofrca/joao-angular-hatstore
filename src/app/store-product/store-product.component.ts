import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.scss'],
  inputs: ['product'],
})
export class StoreProductComponent implements OnInit {
  productName;
  productDescription;
  imageURL;
  stockQuantity;
  originalStockQuantity;

  constructor() {}

  ngOnInit() {
    this.productName = this.product.productName;
    this.productDescription = this.product.productDescription;
    this.imageURL = this.product.imageURL;
    this.stockQuantity = this.product.stockQuantity;
    this.originalStockQuantity = this.product.stockQuantity;
  }

  @Input() product;
  @Output() increaseItemsInCart = new EventEmitter();
  @Output() decreaseItemsInCart= new EventEmitter();

  /**
   * Removes one unit in the product, adds one unit in the header.
   */
  addProductToCart() {
    console.log("add");
    console.log(this.stockQuantity);
    console.log(this.originalStockQuantity);
    if (this.stockQuantity > 0) {
      this.stockQuantity--;
      console.log(this.stockQuantity);
      this.decreaseItemsInCart.emit();
    }
  }

  /**
   * Adds one unit in the product, removes one unit in the header.
   */
  removeProductFromCart() {
    console.log("rem");
    console.log(this.stockQuantity);
    console.log(this.originalStockQuantity);
    if (this.stockQuantity < this.originalStockQuantity) {
      this.stockQuantity++;
      this.increaseItemsInCart.emit();
    }
  }
}
