import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass, RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

private readonly _AuthService = inject(AuthService)
private readonly _FormBuilder = inject(FormBuilder)
private readonly _Router = inject(Router)
private readonly _ToastrService = inject(ToastrService)




isLoading:boolean= false;



loginForm:FormGroup= this._FormBuilder.group({
  email: [null, [Validators.required , Validators.email]],
  password: [null, [Validators.required , Validators.pattern(/^\w{6,}$/)]],
})


loginSubmit():void{
  if(this.loginForm.valid){
    this.isLoading = true;
    this._AuthService.setloginForm(this.loginForm.value).subscribe({
      next: (res) => {
       if(res.message=='success'){
    this._ToastrService.success(res.message , 'FreshCart')
    
        setTimeout(() => {
          localStorage.setItem('userToken', res.token)
          this._AuthService.saveUserData
        this._Router.navigate(['/home'])
        }, 1000);
       }

      
    this.isLoading = false;

        },
        error: (err:HttpErrorResponse) => {
    this.isLoading = false;
        
          console.log(err);
          }
    })
   
  }else{
    // this.msgError = "Please fill all fields";
    this.loginForm.setErrors({mismatch:true})
    this.loginForm.markAllAsTouched()
  }

}








}
