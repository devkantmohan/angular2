import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `<h1>Welcome User</h1>
  <h3> This Is Template for Dashboard</h3>
  `
})
export class DashboardComponent implements OnInit {



  ngOnInit(): void {
console.log("Dashboard")
  }
}


