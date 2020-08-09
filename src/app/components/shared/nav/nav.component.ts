import { Component } from '@angular/core';
import { setTheme } from 'src/app/utility/utility';
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
    setTheme(mode);
  }
}
