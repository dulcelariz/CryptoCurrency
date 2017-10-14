import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MiddlewareService } from './shared/services/middleware.service';
import { DataService } from './shared/services/data.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { Currencies } from './shared/helper/currencies.model';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [MiddlewareService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
