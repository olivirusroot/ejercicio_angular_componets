import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinioComponent } from './linio.component';

describe('LinioComponent', () => {
  let component: LinioComponent;
  let fixture: ComponentFixture<LinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
