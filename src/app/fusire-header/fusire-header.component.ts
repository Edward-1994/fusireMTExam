import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-fusire-header',
  templateUrl: './fusire-header.component.html',
  styleUrl: './fusire-header.component.css'
})
export class FusireHeaderComponent {
  @Input() studentInfo!: Student;
}
