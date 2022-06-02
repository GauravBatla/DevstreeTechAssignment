import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any = {}
  adminLogin = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)])
  })
  constructor(private route: Router,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.adminLogin.valid) {
      this._api.login(this.adminLogin.value).subscribe((res: any) => {
        console.log(res);
        window.sessionStorage.setItem('token', res.accessToken)
        window.localStorage.setItem('user', res.user)
        this.route.navigate(['/'])
      }, ((err: any) => {
        if (err) {
          if (err.error.errors) {
            let msg = err.error.errors[0].msg ? err.error.errors[0].msg : null;
            this.msg['error'] = msg
          } else if (err.error.error) {
            let msg = err.error.error ? err.error.error : null;
            this.msg['error'] = msg
          }
        }
      }))
    }
  }
}
