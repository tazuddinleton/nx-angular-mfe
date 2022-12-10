import { Route } from '@angular/router';
import { SearchAdvancedComponent } from '../search-advanced/search-advanced.component';
import { SearchWizardComponent } from '../search-wizard/search-wizard.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent},
  {path: 'wizard', component: SearchWizardComponent},
  {path: 'advanced', component: SearchAdvancedComponent}
];
