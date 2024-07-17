import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusireFooterComponent } from './fusire-footer.component';

describe('FusireFooterComponent', () => {
  let component: FusireFooterComponent;
  let fixture: ComponentFixture<FusireFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FusireFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FusireFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
