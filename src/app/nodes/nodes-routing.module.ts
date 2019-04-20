import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NodesComponent} from './nodes.component';
import {NodeStartComponent} from './node-start/node-start.component';
import {NodeEditComponent} from './node-edit/node-edit.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';

const nodesRouting: Routes = [
  {path: 'nodes', component: NodesComponent, children: [
    {path: '', component: NodeStartComponent},
    {path: 'new', component: NodeEditComponent},
    {path: ':id', component: NodeDetailComponent},
    {path: ':id/edit', component: NodeEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(nodesRouting)],
  exports: [RouterModule]
})
export class NodesRoutingModule {}
