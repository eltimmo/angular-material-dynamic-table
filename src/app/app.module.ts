import { CdkTableModule } from '@angular/cdk/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations:
  [
    AppComponent,
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatSliderModule,
    MatCardModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
