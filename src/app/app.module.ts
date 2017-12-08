import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {InfoUnitService} from './services/info-unit.service';
import {NodeService} from './services/node.service';
import {TreeService} from './services/tree.service';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {NodesModule} from './nodes/nodes.module';
import {InfoUnitsModule} from './info-units/info-units.module';
import {TreeModule} from './tree/tree.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InfoUnitsModule,
    TreeModule,
    NodesModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [
    InfoUnitService,
    NodeService,
    TreeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
