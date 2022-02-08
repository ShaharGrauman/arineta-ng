import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BootstrapGrid } from './bootstrap-grid/bootstrap-grid.component';
import Header from './header/header.component';
import StudentDetailsComponent from './student-details/student-details.component';
import { CounterComponent } from './counter/counter.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, Header, StudentDetailsComponent, BootstrapGrid, CounterComponent, StudentsListComponent, StudentEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
