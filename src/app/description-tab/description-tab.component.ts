import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-description-tab',
  templateUrl: './description-tab.component.html',
  styleUrls: ['./description-tab.component.scss']
})
export class DescriptionTabComponent implements OnInit {

  htmlCode = `<h1>The name of the product is {{ apple | uppercase }}</h1>`;

  constructor() { }

  ngOnInit(): void {
  }

}
