import { Component, Input, OnInit } from '@angular/core';
import { Province } from '../province';

@Component({
  selector: 'app-fusire-city',
  templateUrl: './fusire-city.component.html',
  styleUrl: './fusire-city.component.css'
})
export class FusireCityComponent implements OnInit {
  @Input() provinces!: Province[];
  province!: string;
  selectedProvince!: Province;

  ngOnInit(): void {
      this.setProvince("Ontario")
  }

  setProvince(province: string) {
    this.province = province;
    this.provinces.forEach((provinceItem) => {
      if (province === provinceItem.name) {
        this.selectedProvince = provinceItem;
      }
    });
  }
}
