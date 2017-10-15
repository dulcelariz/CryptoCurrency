import { Injectable} from '@angular/core';
import { MiddlewareService } from '../services/middleware.service';
import { Currencies } from '../helper/currencies.model';


@Injectable()
export class DataService {

	currencies: Currencies = null;
	currenciesBTC: Currencies = null;
	currenciesETH: Currencies = null;
	currenciesArrBTC: Currencies[];
	currenciesArrETH: Currencies[];

	constructor(private middlewareService: MiddlewareService) {
		this.currenciesArrBTC = [];
		this.currenciesArrETH = [];
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

}