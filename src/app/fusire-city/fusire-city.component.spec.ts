import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusireCityComponent } from './fusire-city.component';

describe('FusireCityComponent', () => {
  let component: FusireCityComponent;
  let fixture: ComponentFixture<FusireCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FusireCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FusireCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
