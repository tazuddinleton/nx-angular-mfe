import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SidenavModule } from '@mfe2/sidenav';
import { SharedRecentActivityModule } from '@mfe2/shared/recent-activity';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
