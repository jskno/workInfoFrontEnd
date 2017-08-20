import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {InfoUnitsComponent} from './info-units/info-units.component';
import {TreeComponent} from './tree/tree.component';
import {InfoUnitStartComponent} from './info-units/info-unit-start/info-unit-start.component';
import {InfoUnitEditComponent} from './info-units/info-unit-edit/info-unit-edit.component';
import {InfoUnitDetailComponent} from './info-units/info-unit-detail/info-unit-detail.component';
import {NodesComponent} from './nodes/nodes.component';
import {NodeStartComponent} from './nodes/node-start/node-start.component';
import {NodeEditComponent} from './nodes/node-edit/node-edit.component';
import {NodeDetailComponent} from './nodes/node-detail/node-detail.component';

const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'infoUnits', component: InfoUnitsComponent, children: [
    {path: '', component: InfoUnitStartComponent},
    {path: 'new', component: InfoUnitEditComponent},
    {path: ':id', component: InfoUnitDetailComponent},
    {path: ':id/edit', component: InfoUnitEditComponent}
  ]},
  {path: 'nodes', component: NodesComponent, children: [
    {path: '', component: NodeStartComponent},
    {path: 'new', component: NodeEditComponent},
    {path: ':id', component: NodeDetailComponent},
    {path: ':id/edit', component: NodeEditComponent}
  ]},
  {path: 'tree', component: TreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
