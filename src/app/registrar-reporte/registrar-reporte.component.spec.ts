import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReporteComponent } from './registrar-reporte.component';

describe('RegistrarReporteComponent', () => {
  let component: RegistrarReporteComponent;
  let fixture: ComponentFixture<RegistrarReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarReporteComponent]
    });
    fixture = TestBed.createComponent(RegistrarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
