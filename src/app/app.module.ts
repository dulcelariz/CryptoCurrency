import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MiddlewareService } from './services/middleware.service';
import { DataService } from './services/data.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
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
