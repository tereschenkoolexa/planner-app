import { Component, OnInit } from '@angular/core';
import {Requirements} from "./requirements.models";
import { from } from 'rxjs';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  requirements: Requirements[] =[
    new Requirements("a1","a1"),
    new Requirements("b2","b2"),
    new Requirements("c3","c3"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
