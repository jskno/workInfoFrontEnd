import {NgModule} from '@angular/core';
import {NodesComponent} from './nodes.component';
import {NodesListComponent} from './nodes-list/nodes-list.component';
import {NodeItemComponent} from './nodes-list/node-item/node-item.component';
import {NodeStartComponent} from './node-start/node-start.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';
import {NodeEditComponent} from './node-edit/node-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {NodesRoutingModule} from './nodes-routing.module';

@NgModule({
  declarations: [
    NodesComponent,
    NodesListComponent,
    NodeItemComponent,
    NodeStartComponent,
    NodeDetailComponent,
    NodeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NodesRoutingModule
  ]
})
export class NodesModule {}
