import { Component } from '@angular/core';
import { UserService } from '@mfe2/shared/data-access-user';

@Component({
  selector: 'mfe2-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private userService: UserService){}

  logOut() {
    this.userService.logout();
  }
}
