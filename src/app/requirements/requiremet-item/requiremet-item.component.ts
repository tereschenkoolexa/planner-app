import { Component, OnInit, Input } from '@angular/core';
import { Requirements } from '../requirements.models';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requiremet-item',
  templateUrl: './requiremet-item.component.html',
  styleUrls: ['./requiremet-item.component.css']
})
export class RequiremetItemComponent implements OnInit {

  @Input() requirement: Requirements;

  constructor(private requirementService: RequirementService) { }

  ngOnInit(): void {
  }

  deleteRequirement() {
    this.requirementService.deleteCurrentRequiremenr(this.requirement);
  }

}
