import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'CryptoCurrency Dashboard';

	constructor() {
	}
}
