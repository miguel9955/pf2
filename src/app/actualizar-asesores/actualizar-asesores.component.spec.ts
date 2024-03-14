import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAsesoresComponent } from './actualizar-asesores.component';

describe('ActualizarAsesoresComponent', () => {
  let component: ActualizarAsesoresComponent;
  let fixture: ComponentFixture<ActualizarAsesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAsesoresComponent]
    });
    fixture = TestBed.createComponent(ActualizarAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
