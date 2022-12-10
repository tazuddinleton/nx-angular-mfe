import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn = new BehaviorSubject(!!localStorage.getItem('login_status'));
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      localStorage.setItem('login_status', 'true');
      this.isUserLoggedIn.next(true);
    }
  }

  logout() {
    localStorage.removeItem('login_status');
    this.isUserLoggedIn.next(false);
  }
}
