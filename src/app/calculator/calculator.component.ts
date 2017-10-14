import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

	foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  	// this.dataService.getExchange('btc','usd').then(
  	// 	response => {
  	// 		console.log(response)
  	// 	}, error => {
  	// 		console.log(error)
  	// 	});
  }

}
