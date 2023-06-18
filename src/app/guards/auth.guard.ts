// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


// import { Injectable } from '@angular/core';
// import {  Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { NgToastService } from 'ng-angular-popup';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class authGuard {

//   constructor(private authService: AuthService, private toastr: NgToastService, private router: Router) { }
//   canActivate():
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {

//     if (this.authService.isLoggedIn()) {
//       return true;
//     }
//     else {
//       this.toastr.error({ detail: 'ERROR', summary: 'Please Login First!' });
//       this.router.navigate(['login']);
//       return false;

// }  }
// }




import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard {
//   constructor(private authService: AuthService, private toastr: NgToastService, private router: Router) { }

//   canActivate():
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {

//     if (this.authService.isLoggedIn()) {
//       return true;
//     } else {
//       this.toastr.error({ detail: 'ERROR', summary: 'Please Login First!' });
//       this.router.navigate(['login']);
//       console.log("wa zbyyy")
//       return false;
//     }
//   }
// }




@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private toastr: NgToastService, private router: Router) { }
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isLoggedIn()) {
      // this.toastr.info('Please Log In!');
      this.toastr.error({ detail: 'ERROR', summary: 'Please Login First!' });
      this.router.navigate(['/login']);
      return false;
    }
    // logged in, so return true
    this.authService.isLoggedIn();
    return true;
  }
}





// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private auth: AuthService,
//     private router: Router,
//     private toast: NgToastService
//   ) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
//     if (this.auth.isLoggedIn()) {
//       return true;
//     } else {
//       this.toast.error({ detail: 'ERROR', summary: 'Please Login First!' });
//       this.router.navigate(['login']);
//       return false;
//     }
//   }


// }
