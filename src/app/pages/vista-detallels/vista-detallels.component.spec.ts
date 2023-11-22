import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetallelsComponent } from './vista-detallels.component';

describe('VistaDetallelsComponent', () => {
  let component: VistaDetallelsComponent;
  let fixture: ComponentFixture<VistaDetallelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaDetallelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDetallelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
