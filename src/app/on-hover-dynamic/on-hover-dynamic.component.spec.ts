import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoverDynamicComponent } from './on-hover-dynamic.component';

describe('OnHoverDynamicComponent', () => {
  let component: OnHoverDynamicComponent;
  let fixture: ComponentFixture<OnHoverDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnHoverDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnHoverDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
