import { Component, OnInit } from '@angular/core';

import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {
  currentGuid: string;
  constructor(private utilityService: UtilitiesService) { }

  ngOnInit() {
    this.getNewGuid();
  }

  getNewGuid(): void {
    this.utilityService.getGuid()
    .subscribe(guid => this.currentGuid = guid);
  }

}
