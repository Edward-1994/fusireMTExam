import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-fusire-footer',
  templateUrl: './fusire-footer.component.html',
  styleUrl: './fusire-footer.component.css'
})
export class FusireFooterComponent {
  @Input() studentInfo!: Student;
}
