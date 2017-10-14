import { Component, ViewChild } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable} from 'rxjs/Rx';

import { DataService } from './shared/services/data.service';
import { Currencies } from './shared/helper/currencies.model';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild(CalculatorComponent) childCalculator: CalculatorComponent;
	title = 'CryptoCurrency Dashboard';
	currencies: Currencies = null;

	constructor(private dataService: DataService) {
		this.dataService.updateCurrencies();
		Observable.interval(10000).subscribe(x => {
	    	this.dataService.updateCurrencies();
	    	this.currencies = this.dataService.getCurrencies();
	  });

	}
}
