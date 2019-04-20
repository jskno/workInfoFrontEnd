
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {InfoUnitsComponent} from './info-units.component';
import {InfoUnitStartComponent} from './info-unit-start/info-unit-start.component';
import {InfoUnitEditComponent} from './info-unit-edit/info-unit-edit.component';
import {InfoUnitDetailComponent} from './info-unit-detail/info-unit-detail.component';
import {CodeSnippetsListComponent} from './code-snippets/code-snippets-list/code-snippets-list.component';
import {CodeSnippetEditComponent} from './code-snippets/code-snippet-edit/code-snippet-edit.component';

const infoUnitsRouting: Routes = [
  {path: 'infoUnits', component: InfoUnitsComponent, children: [
    {path: '', component: InfoUnitStartComponent},
    {path: 'new', component: InfoUnitEditComponent},
    {path: ':id', component: InfoUnitDetailComponent},
    {path: ':id/edit', component: InfoUnitEditComponent}
  ]},
  {path: 'snippets', component: CodeSnippetsListComponent},
  {path: 'new-snippet', component: CodeSnippetEditComponent},
  {path: 'snippets/:id', component: CodeSnippetEditComponent},
  {path: 'snippets/:id/edit', component: CodeSnippetEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(infoUnitsRouting)],
  exports: [RouterModule]
})
export class InfoUnitsRoutingModule {}
