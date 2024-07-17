import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusireProvinceComponent } from './fusire-province.component';

describe('FusireProvinceComponent', () => {
  let component: FusireProvinceComponent;
  let fixture: ComponentFixture<FusireProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FusireProvinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FusireProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
