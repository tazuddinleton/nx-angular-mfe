import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@mfe2/shared/data-access-user';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'mfe2-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
})
export class AppComponent implements OnInit{
  title = 'dashboard';
  constructor(private userService: UserService, private router: Router) {}
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        setTimeout(() => {
         if (!loggedIn) {
          this.router.navigateByUrl('login');
         } else {
          this.router.navigateByUrl('');
         }
        });
      })
  }


}
