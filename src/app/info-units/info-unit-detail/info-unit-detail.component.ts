import { Component, OnInit } from '@angular/core';
import {InfoUnit} from '../../model/info-unit.model';
import {InfoUnitService} from '../../services/info-unit.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-info-unit-detail',
  templateUrl: './info-unit-detail.component.html',
  styleUrls: ['./info-unit-detail.component.css']
})
export class InfoUnitDetailComponent implements OnInit {
  infoUnit: InfoUnit = this.infoUnitService.getEmptyInfoUnit();
  id: number;

  constructor(private infoUnitService: InfoUnitService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.getInfoUnitById(this.id);
          this.fetchInfoUnitById(this.id);
        }
      );
  }

  private getInfoUnitById(id: number) {
    this.infoUnitService.getObsInfoUnitById(this.id)
      .subscribe(
        (infoUnit: InfoUnit) => this.infoUnit = infoUnit
      );
  }

  private fetchInfoUnitById(id: number) {
    this.infoUnitService.fetchInfoUnitById(this.id)
      .subscribe(
        (infoUnit: InfoUnit) => this.infoUnit = infoUnit
      );
  }

  addInfoUnitToNode(nodeId: number) {
    this.infoUnitService.addInfoUnitToNode(nodeId, this.infoUnit);
    this.router.navigate(['../../tree'], {relativeTo: this.route});
  }

  onEditInfoUnit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
