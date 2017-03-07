import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  template: `
  <h1>MY {{planName}}</h1>
 <h3>MY All Plans Displays Here</h3>`

})
export class plancomp {
  planName = 'Combo Plan';
}