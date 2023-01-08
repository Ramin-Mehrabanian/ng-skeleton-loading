import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSkeletonLoadingComponent } from './components/ng-skeleton-loading/ng-skeleton-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSkeletonLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
