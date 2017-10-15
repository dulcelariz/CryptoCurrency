import { Injectable} from '@angular/core';
import { MiddlewareService } from '../services/middleware.service';
import { Currencies } from '../helper/currencies.model';
import { GraphData } from '../helper/graphData.model';

@Injectable()
export class DataService {

	currencies: Currencies = null;
	currenciesBTC: Currencies = null;
	currenciesETH: Currencies = null;
	currenciesArrBTC: Currencies[];
	currenciesArrETH: Currencies[];
	lastValues: Currencies[];
	dataBTC = new GraphData();
	dataETH = new GraphData();
	allData: GraphData[] = [];

	constructor(private middlewareService: MiddlewareService) {
		this.currenciesArrBTC = [];
		this.currenciesArrETH = [];
		this.lastValues = [];
		this.dataBTC.name = 'BTC';
		this.dataETH.name = 'ETH';
		this.dataBTC.series = [{name:'T',value:0}];
		this.dataETH.series = [{name:'T',value:0}];

	}

	updateCurrencies(): Promise<any> {
       
	    return this.middlewareService.getRequest('https://min-api.cryptocompare.com/data/pricemulti', 'fsyms=ETH,BTC&tsyms=USD,EUR,BTC')
	        .then((response) => {
	        	this.setCurrencies(response) 
	            return response;
	        });
    }

    setCurrencies(data) {
  		let time = new Date();
  		let BTC = new Currencies();
  		let ETH = new Currencies();
    	this.currencies = data ? data : {};
    	this.currencies.timestamp = time;
    	
    	this.updateLastValues(data);
    	BTC.base = data.BTC ? data.BTC : {};
    	BTC.timestamp = time;

    	ETH.base = data.ETH ? data.ETH : {};
    	ETH.timestamp = time;
    	this.pushArray(BTC, ETH);
    	
    }

    getCurrencies() {
    	if (this.currencies) {
    		return this.currencies;
    	} 
    	return null;
    }

    pushArray(currencyBTC: Currencies, currencyETH: Currencies,) {
    	this.currenciesArrBTC.push(currencyBTC);
    	this.currenciesArrETH.push(currencyETH);
    }

    getArrayBTC(): Currencies[] {
    	return this.currenciesArrBTC;
    }

    getArrayETH(): Currencies[] {
    	return this.currenciesArrETH;
    }

    updateLastValues(data) {

    	if (data) {
	    	if ( this.lastValues.length < 10) {
	    		this.lastValues.push(data);
	    		return;
	    	}
	    	if ( this.lastValues.length === 10) {
	    		this.lastValues.shift();
	    		this.lastValues.push(data);
	    		return;
	    	}
	    }
    }

    getLastValues(){

    	
    	this.lastValues.forEach((currentValue, index, array) =>  {
			let time: string = 'T'+index;
			console.log(this.dataBTC.series)
			this.dataBTC.series.push( { name: time, value: currentValue['BTC'].USD });
			this.dataETH.series.push( { name: time, value: currentValue['ETH'].USD });

			console.log(this.dataBTC);

		});
    	
    	this.allData.push(this.dataBTC);
    	this.allData.push(this.dataETH);
    	console.log(this.allData)
    	return this.allData;
    }

}