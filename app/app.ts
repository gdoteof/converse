import { Component }       from 'angular2/core';
import { A2yper } from './a2yper'

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <a2yper>hi?</a2yper>
  `,
  directives: [A2yper],
})


export class AppComponent {
  title = 'Tour of a2';
}
