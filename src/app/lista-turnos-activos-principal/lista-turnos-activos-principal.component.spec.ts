import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurnosActivosPrincipalComponent } from './lista-turnos-activos-principal.component';

describe('ListaTurnosActivosPrincipalComponent', () => {
  let component: ListaTurnosActivosPrincipalComponent;
  let fixture: ComponentFixture<ListaTurnosActivosPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTurnosActivosPrincipalComponent]
    });
    fixture = TestBed.createComponent(ListaTurnosActivosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
