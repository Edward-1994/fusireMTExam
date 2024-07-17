import { Component, Input } from '@angular/core';
import { Province } from '../province';

@Component({
  selector: 'app-fusire-province',
  templateUrl: './fusire-province.component.html',
  styleUrl: './fusire-province.component.css'
})
export class FusireProvinceComponent {
  @Input() provinces!: Province[];
}
