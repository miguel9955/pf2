import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  private idSource = new BehaviorSubject<number>(0); // Cambiar null por 0
  currentId = this.idSource.asObservable();

  constructor() { }
  
  changeId(id: number) {
    this.idSource.next(id);
  }
}
