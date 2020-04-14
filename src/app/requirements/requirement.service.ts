import { Injectable, EventEmitter } from '@angular/core';
import { Requirements } from './requirements.models';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {


  requirementUpdate = new EventEmitter<Requirements[]>();

  private requirements: Requirements[] = [
    new Requirements("A", "1"),
    new Requirements("B", "2"),
    new Requirements("C", "3")
  ];

  constructor() { }

  getRequirement(): Requirements[] {
    return this.requirements.slice();
  }

  addNewRequirement(data: Requirements) {
    this.requirements.push(data);
    this.requirementUpdate.emit(this.requirements);
  }

  deleteCurrentRequiremenr(item: Requirements) {
    var id = this.requirements.indexOf(item);
    if ( id != null){
      this.requirements.splice(id, 1);
      this.requirementUpdate.emit(this.requirements);
    }
  }

}
