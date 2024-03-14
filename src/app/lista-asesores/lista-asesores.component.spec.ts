import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsesoresComponent } from './lista-asesores.component';

describe('ListaAsesoresComponent', () => {
  let component: ListaAsesoresComponent;
  let fixture: ComponentFixture<ListaAsesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAsesoresComponent]
    });
    fixture = TestBed.createComponent(ListaAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
