import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { setTheme } from './../../utility/utility';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.init();
  }

  private init() {
    try {
      const defaultTheme = 'day';
      setTheme(defaultTheme);
    } catch (error) {}
  }
}
