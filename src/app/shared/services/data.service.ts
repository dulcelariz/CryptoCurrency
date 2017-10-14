import { Injectable} from '@angular/core';
import { MiddlewareService } from '../services/middleware.service';
import { Currencies } from '../helper/currencies.model';


@Injectable()
export class DataService {

	currencies: Currencies = null;

	constructor(private middlewareService: MiddlewareService) {

	}

	updateCurrencies(): Promise<any> {
       
	    return this.middlewareService.getRequest('https://min-api.cryptocompare.com/data/pricemulti', 'fsyms=ETH,BTC&tsyms=USD,EUR')
	        .then((response) => {
	        	this.setCurrencies(response) 
	            return response;
	        });
    }

    setCurrencies(data) {
    	this.currencies = data ? data : {};
    }

    getCurrencies() {
    	if (this.currencies) {
    		return this.currencies;
    	} 
    	return null;
    }

	// public getExchange(): Promise<any> {
	// 	return this.middlewareService.getRequest('https://min-api.cryptocompare.com/data/pricemulti', 'fsyms=ETH,BTC&tsyms=USD,EUR');
	// }
}