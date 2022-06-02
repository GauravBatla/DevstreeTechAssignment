import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg: any = {}
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  })


  submit() {
    if (this.signUpForm.valid) {
      this._api.signUp(this.signUpForm.value).subscribe((res: any) => {
        console.log(res);
        this.msg['success'] = 'Successfully Created'
        this.signUpForm.reset()
      }, ((err: any) => {
       let formErr = err.error.errors[0].msg
        if (formErr) {
          this.msg['err'] =formErr
        }
        
      }))
    }
  }
}
