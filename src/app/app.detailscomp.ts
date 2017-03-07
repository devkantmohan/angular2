import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  template: `
  <h1>HI {{name}}</h1>
  <h2>This is Details Page</h2><h3>MY All Details Displays Here</h3>`,
  styleUrls: ['./app.component.css']
})
export class detailscomp {
  name = 'dev';
}