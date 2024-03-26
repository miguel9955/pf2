import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTurnoModalComponentComponent } from './editar-turno-modal-component.component';

describe('EditarTurnoModalComponentComponent', () => {
  let component: EditarTurnoModalComponentComponent;
  let fixture: ComponentFixture<EditarTurnoModalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTurnoModalComponentComponent]
    });
    fixture = TestBed.createComponent(EditarTurnoModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
