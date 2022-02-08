import { Component, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'student-details',
  template: `
    <div *ngIf="!student">
      <div class="alert alert-info">
        Please select a student
      </div>
    </div>
    <div class="card" style="width: 18rem;" *ngIf="student">
      <img class="card-img-top" [src]="student.image" alt="Card image cap" />
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          [ngStyle]="{ 'width.%': student.courseProgress }"
          [attr.aria-valuenow]="student.courseProgress"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ student.courseProgress }}%
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title" [ngStyle]="{ color: color }">
          {{ student.name }} (age: {{ student.age }})
        </h5>

        <ng-content></ng-content>

        <ul class="list-group">
          <li class="list-group-item" *ngFor="let phone of phones">
            {{ phone }}
          </li>
        </ul>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-warning" (click)="addNewPhone(newphone.value)">Add!</button>
          </div>
          <input
            #newphone
            type="text"
            class="form-control"
            placeholder="New Phone"
            aria-label="New Phone"
          />
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Enter..."
          aria-label="New Phone"
        />
        <div *ngIf="text.length > 10 else thetext">Too long...</div>
        <ng-template #thetext><div>{{text}}({{text.length}})</div></ng-template>
        <a href="#" class="btn btn-primary">Make some action</a>
        <div class="alert alert-danger" role="alert" *ngIf="student.balance < 0">
          Notice! Debit of -1200!
        </div>
        <div class="alert alert-success" role="alert" *ngIf="student.balance >= 0">
          Your balance is 1200!
        </div>
      </div>
      <div>
        Enter some text here <input type="text" #textInput (keyup)="updateText(textInput.value)">
        <br>
        <div *ngIf="text.length <= 10 else tooLong">{{text}}</div>
        <ng-template #tooLong>Too long...</ng-template>
      </div>
    </div>
  `,
})
export default class StudentDetailsComponent {

  @Input() student:Student | undefined;

  color: string = 'green';
  phones: string[] = ['054-1234567', '02-1254878', '03-545454'];
  text:string = ''

  constructor() {
    this.student = new Student('Shahar', 27, 'Angular', 75,
        'graumanoz@gmail.com', 1200, 35,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8QzQiacCWSM3tqpKu_gVILmJAlruJoKfN6vEXcHb8aSyPCD8');
  }

  isInDebt(): boolean {
    return this.student!.balance < 0;
  }

  addNewPhone(newPhone:string) {
    this.phones.push(newPhone);
  }

  updateText(text:string) {
    // this.text = text.length > 10 ? 'Too long...' : text;
    this.text = text;
  }
}
