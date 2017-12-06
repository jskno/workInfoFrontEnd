import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoUnitsComponent } from './info-units/info-units.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { TreeComponent } from './tree/tree.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { InfoUnitsListComponent } from './info-units/info-units-list/info-units-list.component';
import { InfoUnitDetailComponent } from './info-units/info-unit-detail/info-unit-detail.component';
import { InfoUnitEditComponent } from './info-units/info-unit-edit/info-unit-edit.component';
import { InfoUnitStartComponent } from './info-units/info-unit-start/info-unit-start.component';
import { InfoUnitItemComponent } from './info-units/info-units-list/info-unit-item/info-unit-item.component';
import {InfoUnitService} from './services/info-unit.service';
import {NodeService} from './services/node.service';
import {TreeService} from './services/tree.service';
import {TreeViewComponent} from './tree/tree-view/tree-view.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodeDetailComponent } from './nodes/node-detail/node-detail.component';
import { NodeEditComponent } from './nodes/node-edit/node-edit.component';
import { NodeStartComponent } from './nodes/node-start/node-start.component';
import { NodesListComponent } from './nodes/nodes-list/nodes-list.component';
import { NodeItemComponent } from './nodes/nodes-list/node-item/node-item.component';
import { TabsComponent } from './home/tabs/tabs.component';
import {AuthService} from './auth/auth.service';
import {CommonModule} from '@angular/common';
import {CodeSnippetEditComponent} from "./code-snippets/code-snippet-edit/code-snippet-edit.component";
import {CodeSnippetsListComponent} from "./code-snippets/code-snippets-list/code-snippets-list.component";
import {CodeSnippetItemComponent} from "./code-snippets/code-snippets-list/code-snippet-item/code-snippet-item.component";
import {SnippetFilterPipe} from "./code-snippets/snippet-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    DropdownDirective,
    InfoUnitsComponent,
    InfoUnitsListComponent,
    InfoUnitItemComponent,
    InfoUnitDetailComponent,
    InfoUnitEditComponent,
    InfoUnitStartComponent,
    CodeSnippetEditComponent,
    CodeSnippetsListComponent,
    CodeSnippetItemComponent,
    NodesComponent,
    NodesListComponent,
    NodeItemComponent,
    NodeDetailComponent,
    NodeEditComponent,
    NodeStartComponent,
    TreeComponent,
    TreeViewComponent,
    TabsComponent,
    SnippetFilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    // AuthService,
    InfoUnitService,
    NodeService,
    TreeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
