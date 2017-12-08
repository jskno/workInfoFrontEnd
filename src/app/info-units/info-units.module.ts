import {NgModule} from '@angular/core';
import {InfoUnitsComponent} from './info-units.component';
import {InfoUnitsListComponent} from './info-units-list/info-units-list.component';
import {InfoUnitItemComponent} from './info-units-list/info-unit-item/info-unit-item.component';
import {InfoUnitStartComponent} from './info-unit-start/info-unit-start.component';
import {InfoUnitDetailComponent} from './info-unit-detail/info-unit-detail.component';
import {InfoUnitEditComponent} from './info-unit-edit/info-unit-edit.component';
import {CodeSnippetsListComponent} from './code-snippets/code-snippets-list/code-snippets-list.component';
import {CodeSnippetItemComponent} from './code-snippets/code-snippets-list/code-snippet-item/code-snippet-item.component';
import {CodeSnippetEditComponent} from './code-snippets/code-snippet-edit/code-snippet-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {InfoUnitsRoutingModule} from './info-units-routing.module';
import {SnippetFilterPipe} from './code-snippets/snippet-filter.pipe';

@NgModule({
  declarations: [
    InfoUnitsComponent,
    InfoUnitsListComponent,
    InfoUnitItemComponent,
    InfoUnitStartComponent,
    InfoUnitDetailComponent,
    InfoUnitEditComponent,
    CodeSnippetsListComponent,
    CodeSnippetItemComponent,
    CodeSnippetEditComponent,
    SnippetFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    InfoUnitsRoutingModule
  ]
})
export class InfoUnitsModule {}
