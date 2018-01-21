import {Component, Input, OnInit} from '@angular/core';
import {InfoUnit} from '../../../model/info-unit.model';

@Component({
  selector: 'app-info-unit-item',
  templateUrl: './info-unit-item.component.html',
  styleUrls: ['./info-unit-item.component.css']
})
export class InfoUnitItemComponent implements OnInit {
  @Input() infoUnit: InfoUnit;

  constructor() { }

  ngOnInit() {
  }

}
