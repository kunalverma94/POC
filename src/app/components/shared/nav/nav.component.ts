import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public title = environment.title;
  public nigth = false;

  public switchMode() {
    this.nigth = !this.nigth;
    const mode = this.nigth ? 'night' : 'day';
    Object.keys(environment.themes[mode]).forEach((c) =>
      document.documentElement.style.setProperty(c, environment.themes[mode][c])
    );
  }
}
