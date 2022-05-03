import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor() { }

  checkPassword(user: User, password: string) {
    return user.password === password;
  }
}
