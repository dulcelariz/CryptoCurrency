import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Middleware } from './services/middleware.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'CryptoCurrency Dashboard';

	constructor(private middleware: Middleware) {
		this.getCurrency().then(
			response => {
				console.log(response);
			}, error => {
				console.log(error);
			});
	}

	getCurrency(): Promise<any> {
		return this.middleware.getRequest('https://api.cryptonator.com/api/ticke', 'btc-BITC');
	}
}
