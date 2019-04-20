
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TreeComponent} from './tree.component';

const treeRouting: Routes = [
  {path: 'tree', component: TreeComponent},
];
@NgModule({
  imports: [RouterModule.forChild(treeRouting)],
  exports: [RouterModule]
})
export class TreeRoutingModule {}
