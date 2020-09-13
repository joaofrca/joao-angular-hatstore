import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.scss'],
  inputs: ['items']
})
export class StoreHeaderComponent {
  
  constructor() {}
  ngOnInit(): void {}
  @Input() nItems;
  @Input() headerTitle;
}
