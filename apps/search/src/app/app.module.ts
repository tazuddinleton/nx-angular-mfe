import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchWizardComponent } from './search-wizard/search-wizard.component';
import { SearchAdvancedComponent } from './search-advanced/search-advanced.component';
import { SharedEndecaModule } from '@mfe2/shared/endeca';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list'
import { ReuseStrategy } from '../../../dashboard/src/app/reuse-strategy';


@NgModule({
  declarations: [AppComponent, SearchWizardComponent, SearchAdvancedComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedEndecaModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatListModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
