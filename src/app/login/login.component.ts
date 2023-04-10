import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';


import {Router} from '@angular/router';
import {AuthStore} from '../services/auth.store';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private auth: AuthStore) {

    this.form = fb.group({
      email: ['moe_zaki@gmail.com', [Validators.required]],
      password: ['moe_', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;

    this.auth.login(val.email, val.password)
        .subscribe(
            () => {
              this.router.navigateByUrl('/courses')
            },
            err => {
                alert("Login failed!");
            }
        );



  }

}
