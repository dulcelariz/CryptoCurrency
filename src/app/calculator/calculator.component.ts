import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  base = 0;
  target = 0;
	currenciesBase = [
    { code: 'btc'},
    { code: 'eth'},
  ];

  currenciesTarget = [
    { code: 'usd'},
    { code: 'eur'},
  ];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.updateCurrencies().then(
      response => {
        this.dataService.getCurrencies();
      },error => {
        console.log(error)
      }
      );
    
  	// this.dataService.getExchange().then(
  	// 	response => {
  	// 		console.log(response)
  	// 	}, error => {
  	// 		console.log(error)
  	// 	});
  }

  calcExchange(valueToExchange: number, exchangeType: string) {



  }

}
