import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../models/student';
import { ArinetaValidators } from '../utils/arineta-validators';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  editForm:FormGroup;

  coursesList:KeyValue<string, number>[] = []

  get firstName() { return (this.editForm.get('fullName') as FormGroup).controls['firstName'] }
  get email() { return (this.editForm.get('email') as FormControl) }
  get image() { return (this.editForm.get('image') as FormControl) }

  constructor() {
    this.editForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
        lastName: new FormControl()
      }),
      age: new FormControl(),
      course: new FormControl(),
      avg: new FormControl(),
      email: new FormControl('', Validators.pattern(/^[^@]+@[^@]+$/)),
      balance: new FormControl(),
      courseProgress: new FormControl(),
      image: new FormControl('', ArinetaValidators.imageLinkValidator(/^(http|https):\/\//)),
    });
  }

  ngOnInit(): void {
    this.coursesList = Object.entries(Course)
                             .filter(entry => isNaN(Number(entry[0])))
                             .map(entry => ({key: entry[0], value: +entry[1]}));
  }

  onSubmit(){
    console.log(this.editForm.value);
  }
}
