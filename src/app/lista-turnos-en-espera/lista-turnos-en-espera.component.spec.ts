import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurnosEnEsperaComponent } from './lista-turnos-en-espera.component';

describe('ListaTurnosEnEsperaComponent', () => {
  let component: ListaTurnosEnEsperaComponent;
  let fixture: ComponentFixture<ListaTurnosEnEsperaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTurnosEnEsperaComponent]
    });
    fixture = TestBed.createComponent(ListaTurnosEnEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
