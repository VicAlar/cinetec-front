import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private api: ApiService, private  fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.api.CheckIfAuthenticated()
    if (this.api.isAuthenticated) {
      this.router.navigate(['/dashboard'])
    }
  }

  login() {
    this.api.login(this.usuario.value).subscribe(
        (data: { token: any; } | undefined) => {
        if(data != undefined) {
          this.api.crearHeaders(data.token)
          this.router.navigate(['/dashboard'])
        }
      }
    )
  }
}
