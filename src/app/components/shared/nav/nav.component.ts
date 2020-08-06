import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public title = environment.title;
  public nightMode = false;

  public switchMode() {
    this.nightMode = !this.nightMode;
    const mode = this.nightMode ? 'night' : 'day';
    Object.keys(environment.appsettings.THEMES[mode]).forEach((c) =>
      document.documentElement.style.setProperty(c, environment.appsettings.THEMES[mode][c])
    );
  }
}
