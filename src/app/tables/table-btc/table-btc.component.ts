import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { Currencies } from '../../shared/helper/currencies.model';
import { DataService } from '../../shared/services/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-btc',
  templateUrl: './table-btc.component.html',
  styleUrls: ['./table-btc.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TableBTCComponent implements OnInit {

	get currency(): Currencies[] { return this.dataChange.value; };
    set currency(_currency: Currencies[]) { this.dataChange.next(_currency); };

    dataChange: BehaviorSubject<Currencies[]> = new BehaviorSubject<Currencies[]>([]);
    displayedColumns = ['timestamp', 'USD', 'EUR'];
    dataSource: TableDataSource | null;

    currencies: Currencies[];
    currenciesComplete: Currencies = null;

    constructor(private dataService: DataService, private ref: ChangeDetectorRef) {
     }

    ngOnInit() {
    	this.ref.detach();
    	Observable.interval(10000).subscribe(x => {
	    	this.currencies = this.dataService.getArrayBTC();
	    	this.dataSource = new TableDataSource(this.currencies);
	    	this.ref.detectChanges();
	  });
    }

}

export class TableDataSource extends DataSource<any> {

    filteredData: any[] = [];
    renderedData: any[] = [];

    constructor(public _currency: any) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._currency,
        ];

        return Observable.merge(...displayDataChanges).map(() => {
           const data = this._currency.slice();
             return data;
        });
		}

    disconnect() { }
}

