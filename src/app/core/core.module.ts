import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard.service';
import {SharedModule} from '../shared/shared.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {TabsComponent} from './home/tabs/tabs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    TabsComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {}
