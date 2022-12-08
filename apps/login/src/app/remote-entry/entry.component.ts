import { Component } from '@angular/core';
import { UserService } from '@mfe2/shared/data-access-user';

@Component({
  selector: 'mfe2-login-entry',
  template: `
  <div class="login-app">
  <form class="login-form" (ngSubmit)="login()">
    <label>
      Username:
      <input type="text" name="username" [(ngModel)]="username" />
    </label>
    <label>
      Password:
      <input type="password" name="password" [(ngModel)]="password" />
    </label>
    <button type="submit">Login</button>
  </form>
  <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
</div>`,
styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  constructor(private userService: UserService ){}

  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
