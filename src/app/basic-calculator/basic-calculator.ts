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
    // strings because html inputs are strings

    const a = parseFloat(first);
    const b = parseFloat(second);

    // si un des deux champs est vide ou invalide
    if (isNaN(a) || isNaN(b)) {
      this.answer = null;
      return;
    }

    switch (operator) {
      case '+':
        this.answer = a + b;
        break;
      case '-':
        this.answer = a - b;
        break;
      case '×':
        this.answer = a * b;
        break;
      case '÷':
        this.answer = b === 0 ? null : a / b; // évite la division par zéro
        break;
    }

  }
}