import { Component, OnInit } from '@angular/core';
import {Requirements} from "./requirements.models";
import { RequirementService } from './requirement.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  constructor(private requirementService: RequirementService) { }
  requirements: Requirements[];


  ngOnInit(): void {
    this.requirements = this.requirementService.getRequirement();
    this.requirementService.requirementUpdate.subscribe((requirements: Requirements[])=>{
      this.requirements = requirements;
    });
  }

}
