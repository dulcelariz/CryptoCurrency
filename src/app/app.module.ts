import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MiddlewareService } from './shared/services/middleware.service';
import { DataService } from './shared/services/data.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { Currencies } from './shared/helper/currencies.model';
import { TablesComponent } from './tables/tables.component';
import { TableBTCComponent } from './tables/table-btc/table-btc.component';
import { TableETHComponent } from './tables/table-eth/table-eth.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TablesComponent,
    TableBTCComponent,
    TableETHComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [MiddlewareService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
