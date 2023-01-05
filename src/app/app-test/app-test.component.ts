import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <div class="app-test">Inline Template!</div> `,
  styles: [
    `
      .app-test {
        color: red;
      }
    `,
  ],
})
export class AppTestComponent {}
