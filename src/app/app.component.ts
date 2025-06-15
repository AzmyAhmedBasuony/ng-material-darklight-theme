import { Component, VERSION } from '@angular/core';

export enum KikCsvKeys {
  country = 'country',
  global = 'global',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  get lightTheme(): boolean {
    return document.documentElement.getAttribute('theme') === 'light';
  }

  toggle() {
    if (this.lightTheme) {
      document.documentElement.setAttribute('theme', null);
    } else {
      document.documentElement.setAttribute('theme', 'light');
    }
  }
}
