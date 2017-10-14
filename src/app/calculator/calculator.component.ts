import { Component, Input } from '@angular/core';
import { Currencies } from '../shared/helper/currencies.model';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  @Input() currencies: Currencies;
  calculatorForm: any;
  currenciesTarget: any;
  currenciesBase: any;

  constructor(private ref: ChangeDetectorRef) {
    this.currenciesTarget = ['USD', 'EUR'];
    this.currenciesBase = ['BTC', 'ETH'];
    this.calculatorForm = { target: 0, base: 0, selectedTarget: 'USD', selectedBase: 'BTC' };
  }

  calcExchange(order: string) {

    if (this.currencies) {
      if (order === 'BaseToTarget') {
        let baseSelected = this.calculatorForm.selectedBase;
        let targetSelected = this.calculatorForm.selectedTarget;
        let target = this.currencies[baseSelected];
        this.calculatorForm.target = this.calculatorForm.base * target[targetSelected];
      }  

      if ( order === 'TargetToBase') {
        let targetSelected = this.calculatorForm.selectedTarget;
        let baseSelected = this.calculatorForm.selectedBase;
        let base = this.currencies[baseSelected];
        let baseConverted = 1 / base[targetSelected];
        this.calculatorForm.base =  this.calculatorForm.target * baseConverted;
      }
    }
  }


}
