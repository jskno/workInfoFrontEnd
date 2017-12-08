import {NgModule} from '@angular/core';
import {TreeComponent} from './tree.component';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {TreeRoutingModule} from './tree-routing.module';

@NgModule({
  declarations: [
    TreeComponent,
    TreeViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TreeRoutingModule
  ]
})
export class TreeModule {}
