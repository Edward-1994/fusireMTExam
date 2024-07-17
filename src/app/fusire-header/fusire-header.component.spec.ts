import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusireHeaderComponent } from './fusire-header.component';

describe('FusireHeaderComponent', () => {
  let component: FusireHeaderComponent;
  let fixture: ComponentFixture<FusireHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FusireHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FusireHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
