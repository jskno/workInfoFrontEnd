import {Component, OnDestroy, OnInit} from '@angular/core';
import {InfoUnit} from '../../model/info-unit.model';
import {InfoUnitService} from '../../services/info-unit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-info-units-list',
  templateUrl: './info-units-list.component.html',
  styleUrls: ['./info-units-list.component.css']
})
export class InfoUnitsListComponent implements OnInit, OnDestroy {
  infoUnitsChangeSubscription: Subscription;
  infoUnits: InfoUnit[];

  constructor(private infoUnitService: InfoUnitService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchInfoUnits();
    this.infoUnitsChangeSubscription = this.infoUnitService.infoUnitsChanged
      .subscribe(
        () => this.fetchInfoUnits()
      );
  }

  ngOnInitMock() {
    this.getInfoUnits();
    this.infoUnitsChangeSubscription = this.infoUnitService.infoUnitsChanged
      .subscribe(
        () => this.getInfoUnits()
      );
  }

  private getInfoUnits(): void {
    this.infoUnitService.getInfoUnits()
      .subscribe(
        (infoUnits: any[]) => this.infoUnits = infoUnits
      );
  }

  private fetchInfoUnits(): void {
    this.infoUnitService.fetchInfoUnits()
      .subscribe(
        (infoUnits: InfoUnit[]) => this.infoUnits = infoUnits
      );
  }

  ngOnDestroy() {
    this.infoUnitsChangeSubscription.unsubscribe();
  }

  onNewInfoUnit() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onNewSnippetInfoUnit() {
    this.router.navigate(['../new-snippet'], {relativeTo: this.route});
  }

}
