import { TestBed } from '@angular/core/testing';
import { User } from '../model/user.model';

import { PasswordCheckerService } from './password-checker.service';

describe('PasswordCheckerService', () => {
  let service: PasswordCheckerService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be right password', () => {
    let user = {} as User
    user.password = 'test';
    expect(service.checkPassword(user, 'test')).toBeTrue();
  });

  it('should be wrong password', () => {
    let user = {} as User
    user.password = 'test';
    expect(service.checkPassword(user, 'pass')).toBeFalse();
  });
});
