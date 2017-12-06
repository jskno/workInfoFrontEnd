import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InfoUnit} from '../../model/info-unit.model';
import {InfoUnitService} from '../../services/info-unit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SnippetFilterPipe} from '../snippet-filter.pipe';

@Component({
  selector: 'app-code-snippets-list',
  templateUrl: './code-snippets-list.component.html',
  styleUrls: ['./code-snippets-list.component.css']
})
export class CodeSnippetsListComponent implements OnInit, OnDestroy {
  infoUnitsChangeSubscription: Subscription;
  codeSnippets: InfoUnit[];
  CODE_SNIPPETS = 'Code Snippets';

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

  private fetchInfoUnits(): void {
    this.infoUnitService.fetchInfoUnitsByNodeTitle(this.CODE_SNIPPETS)
      .subscribe(
        (infoUnits: InfoUnit[]) => this.codeSnippets = infoUnits
      );
  }

  ngOnDestroy() {
    this.infoUnitsChangeSubscription.unsubscribe();
  }

  onNewSnippetInfoUnit() {
    this.router.navigate(['../new-snippet'], {relativeTo: this.route});
  }

}
