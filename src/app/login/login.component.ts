import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { PasswordCheckerService } from '../service/password-checker/password-checker.service';
import { ToastService } from '../service/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  loginForm: FormGroup = {} as FormGroup;

  constructor(
    private fb: FormBuilder,
    private passwordChecker: PasswordCheckerService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.initUserArray();
    this.initLoginForm();
  }

  login() {
    const user = this.users.find(user => user.id === this.loginForm.controls['id'].value);
    if (user === undefined) {
      this.toastService.show('No user with id!', { classname: 'bg-danger text-light' });
    } else {
      if (this.passwordChecker.checkPassword(user, this.loginForm.controls['password'].value)) {
        this.router.navigateByUrl('/game');
        this.toastService.show('Login success', { classname: 'bg-success text-light' });
      } else {
        this.toastService.show('Wrong password!', { classname: 'bg-danger text-light' });
      }
    }
  }

  selectRow(userId: number) {
    this.loginForm.controls['id'].setValue(userId);
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private createUser(id: number, name: string, password: string): User {
    const user = {} as User;
    user.id = id;
    user.name = name;
    user.password = password;
    return user;
  }

  private initUserArray() {
    this.users.push(this.createUser(1, 'LottoOtto', 'otto'));
    this.users.push(this.createUser(2, 'LottoTomi', 'tomi'));
    this.users.push(this.createUser(3, 'LottoKaresz', 'karesz'));
  }
}
