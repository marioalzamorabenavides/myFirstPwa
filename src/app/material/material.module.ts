import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatRippleModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
