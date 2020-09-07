import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngFor with TrackBy in Angular';
  employees: any[] = [];

  constructor() {

    this.employees = [
      // { id: 1, name: 'Mark', age: 25 },
      // { id: 2, name: 'Jack', age: 26 },
      // { id: 3, name: 'John', age: 28 }
    ];
  }

  GetEmployees() {
    this.employees = [
      { id: 1, name: 'Mark', age: 30 },
      { id: 2, name: 'Jack', age: 26 },
      { id: 3, name: 'John', age: 28 },
      { id: 4, name: 'William', age: 29 },
      { id: 5, name: 'Sophia', age: 27 }
    ];
  }

  TrackByEmployees(index: number, employee: any): string {
    return employee.id;
  }
}
