import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
//
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //loginForm property will be initialized and won't be null or undefined(!)
  loginForm ! :FormGroup
  constructor(private router: Router, private fb:FormBuilder,
  private  auth:AuthService ,private toast:NgToastService) {}

  ngOnInit():void{
    this.loginForm=this.fb.group({

      email:['',Validators.required],
      password:['',Validators.required]


    })
  }


  register(){


       this.router.navigate(['register']);
     

  }

  onLogin(){

    if(this.loginForm.valid){

      this.auth.signIn(this.loginForm.value).subscribe(
        {
          next :(res=>{
            this.loginForm.reset();
 
            this.auth.storeToken(res.token);

            console.log(res.token)
            this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});

            this.router.navigate(['dashboard']);



          }),
          error:(err=>{
             

            this.toast.error({detail:"ERROR",summary:err?.error.message,sticky:true});

          })
          
        })


    }

    else {

      this.validateAllFormFields(this.loginForm)

      alert("something wrong")
    }

  }


 

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
  
      if (control instanceof FormControl) {
        control.markAsDirty({
          onlySelf: true
        });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  
}

