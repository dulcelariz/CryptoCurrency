import { Injectable } from '@angular/core';
import { MiddlewareService } from '../services/middleware.service';

@Injectable()
export class DataService {

	constructor(private middlewareService: MiddlewareService) {
	}

	public getExchange(currencyCodeFrom: string, currencyCodeTo: string): Promise<any> {
		let currencyCodes = currencyCodeFrom + '-' + currencyCodeTo;
		return this.middlewareService.getRequest('https://api.cryptonator.com/api/ticker', currencyCodes);
	}
}