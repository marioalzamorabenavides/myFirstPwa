import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

const material = [
  MatRippleModule,
  MatCardModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
