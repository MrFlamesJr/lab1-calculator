import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-basic-calculator',
  styleUrl: './basic-calculator.css',
  templateUrl: './basic-calculator.html',
})
export class BasicCalculator {

  answer: number | null = null;


  calculate = (operator: string, first: string, second: string) => {
    //strings because html inputs are strings

    console.log(first, operator, second);
    // calculate and set this.answer (this automatically sets it in the DOM because of [value]=)
  }
}






/*
  //possible solution:

  operations: { [key: string]: (a: number, b: number) => number } = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '×': (a, b) => a * b,
    '÷': (a, b) => a / b
  };

  this.operations[operator](Number(first), Number(second));
 */
