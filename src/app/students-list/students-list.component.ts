import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  @Output() onSelected:EventEmitter<Student> = new EventEmitter<Student>();

  students:Student[] = [
    new Student('Hamudi', 51, 'Node', 70, 'shachar@yahoo.com', -6500, 90,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6LvJ31Im-Q4LdBeqQYs2AxKHQD8fHIOBCyt1kzGeGYRipnbwzg'),
    new Student('Shahar', 27, 'Angular', 75, 'graumanoz@gmail.com', 1200, 35,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8QzQiacCWSM3tqpKu_gVILmJAlruJoKfN6vEXcHb8aSyPCD8'),
    new Student('Yoav', 26, 'CSS', 80.1, 'shachar@yahoo.com', 0, 90,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvf2bJWe0LbDYLCzK7SS81-jkUVxCVm0eCVbCWyA2G8xdP5m29'),
    new Student('Hamudi', 51, 'Node', 52, 'shachar@yahoo.com', -6500, 90,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6LvJ31Im-Q4LdBeqQYs2AxKHQD8fHIOBCyt1kzGeGYRipnbwzg'),
    new Student('Leah', 40, 'Java', 88, 'shachar@yahoo.com', -590, 30,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwKTrMeeoGjaa4-10SufKs173ugaJv2GsywvlCfIo0i3oG4j33w'),
    new Student('Rachel', 19, 'C#', 25, 'shachar@yahoo.com', 1200, 64,
    'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-10/256/woman-teacher.png'),
    new Student('Hamudi', 51, 'Node', 92, 'shachar@yahoo.com', -6500, 90,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6LvJ31Im-Q4LdBeqQYs2AxKHQD8fHIOBCyt1kzGeGYRipnbwzg'),
    new Student('John', 29, 'React', 60, 'shachar@yahoo.com', 0, 64,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8QzQiacCWSM3tqpKu_gVILmJAlruJoKfN6vEXcHb8aSyPCD8'),
  ];

  selected:Student = Student.empty;

  sortIsAsc:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  selectStudent(student:Student) {
    this.selected = student;
    this.onSelected.emit(student);
  }

  sort() {
    this.students.sort((s1, s2) => (this.sortIsAsc * s1.name.localeCompare(s2.name)) || (s2.avg - s1.avg));
    this.sortIsAsc = this.sortIsAsc * -1;
  }
}
