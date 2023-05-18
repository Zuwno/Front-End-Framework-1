import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: IProduct[] = [
    {_id: 1, name: 'Product 1', price: 1000, img:'https://picsum.photos/200/200'},
    {_id: 2, name: 'Product 2', price: 2000, img:'https://picsum.photos/200/200'},
    {_id: 3, name: 'Product 3', price: 3000, img:'https://picsum.photos/200/200'}
  ]
  
  onHandleRemove(id: any)
  {
        this.products = this.products.filter((item) => item._id !== id);

  }
}

// Logic, View, Stylesheet
// .ts, .html, .scss


// function HelloComponent(){

// }

// <HelloComponent />