import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  registerForm ! :FormGroup

  constructor(private router: Router, private fb:FormBuilder, 
    private auth:AuthService ) {}

  ngOnInit():void{
    this.registerForm=this.fb.group({

      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],


    })
  }
  


  onSignup(){

    if(this.registerForm.valid){
      
      this.auth.signUp(this.registerForm.value).subscribe(
      {
        next :(res=>{
          console.log(res);
          alert(res.message);
          this.registerForm.reset();
          this.router.navigate(['login']);
        }),
        error:(err=>{
          alert(err?.error.message)
        })
      })

    }
    else {

      this.validateAllFormFields(this.registerForm)

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
