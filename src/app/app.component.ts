import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arineta';
  subTitle:string = 'Angular Course'

  selectedStudent:Student | undefined;

  onSelectedStudent(student: any) {
    this.selectedStudent = student;
  }
}
