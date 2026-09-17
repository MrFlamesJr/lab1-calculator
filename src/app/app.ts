import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BasicCalculator} from './basic-calculator/basic-calculator';  

@Component({
  imports: [RouterOutlet, BasicCalculator],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lab1-calculator');
}
