import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabyDetailComponent } from './baby-detail/baby-detail.component';
import { BabyService } from './baby.service';

@NgModule({
  declarations: [
    AppComponent,
    BabyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BabyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
