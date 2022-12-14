import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SidenavModule } from '@mfe2/sidenav';
import { SharedRecentActivityModule } from '@mfe2/shared/recent-activity';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReuseStrategy } from './reuse-strategy';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SidenavModule,
    SharedRecentActivityModule,
    HttpClientModule,
      MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(
      appRoutes,
      { initialNavigation: 'enabledBlocking' }
      ),
  ],
  providers: [
        {provide: RouteReuseStrategy, useClass: ReuseStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
