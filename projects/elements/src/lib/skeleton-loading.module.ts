import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSkeletonLoading } from './core/directives/skeleton-loading';



@NgModule({
  declarations: [
    NgSkeletonLoading
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    NgSkeletonLoading
  ]
})
export class SkeletonLoadingModule { }
