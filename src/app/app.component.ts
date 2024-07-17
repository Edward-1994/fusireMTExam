import { Component } from '@angular/core';
import { Student } from './student';
import data from "../assets/data/province.json"
import { Province } from './province';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fusireMTExam';
  
  student: Student = new Student("991707724", "Edward", "Fusire", 3);
  provinces: Province[] = data.provinces;
}
