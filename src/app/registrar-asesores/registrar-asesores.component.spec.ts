import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAsesoresComponent } from './registrar-asesores.component';

describe('RegistrarAsesoresComponent', () => {
  let component: RegistrarAsesoresComponent;
  let fixture: ComponentFixture<RegistrarAsesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAsesoresComponent]
    });
    fixture = TestBed.createComponent(RegistrarAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
