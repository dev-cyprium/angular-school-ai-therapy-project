import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperFrontReadMoreComponent } from './upper-front-read-more.component';

describe('UpperFrontReadMoreComponent', () => {
  let component: UpperFrontReadMoreComponent;
  let fixture: ComponentFixture<UpperFrontReadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperFrontReadMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperFrontReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
