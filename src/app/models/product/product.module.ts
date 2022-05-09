/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
 */

export interface Product {
  id?: number;
  name: string;
  categoria: string;
  valor: number;
}
