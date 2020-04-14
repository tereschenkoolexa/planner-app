import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Requirements } from '../requirements.models';

@Component({
  selector: 'app-requiremet-add',
  templateUrl: './requiremet-add.component.html',
  styleUrls: ['./requiremet-add.component.css']
})
export class RequiremetAddComponent implements OnInit {

  constructor(private requirementService: RequirementService) { }

  requirementName: string;
  requirementDescription: string;

  ngOnInit(): void {
  }

  addRequirement() {
    this.requirementService.addNewRequirement(new Requirements(this.requirementName, this.requirementDescription));
  }
}
