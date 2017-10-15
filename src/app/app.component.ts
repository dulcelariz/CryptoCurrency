import { Component, ViewChild } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import {MatTableModule} from '@angular/material';
import { DataService } from './shared/services/data.service';
import { Currencies } from './shared/helper/currencies.model';
import { CalculatorComponent } from './calculator/calculator.component';
import { TablesComponent } from './tables/tables.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild(CalculatorComponent) childCalculator: CalculatorComponent;
	title = 'CryptoCurrency Dashboard';
	currencies: Currencies = null;
	btc_usd = 0;
	eth_usd = 0;

	constructor(private dataService: DataService) {
		this.dataService.updateCurrencies();
		Observable.interval(10000).subscribe(x => {
	    	this.dataService.updateCurrencies();
	    	this.currencies = this.dataService.getCurrencies();
	    		this.btc_usd = this.currencies['BTC'];
				this.eth_usd = this.currencies['ETH'];
	  });

	}
}
