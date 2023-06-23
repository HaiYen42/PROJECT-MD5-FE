import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Token} from "@angular/compiler";
import {TokenService} from "./token.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('token o adminguard-->', this.tokenService.getToken());
    // console.log('role--->',this.tokenService.getRole())
    // console.log(JSON.stringify( this.tokenService.getRole()) == JSON.stringify(['ADMIN']))
    // @ts-ignore
    if (JSON.stringify(this.tokenService.getRole())== JSON.stringify(['ADMIN'])) {
      // console.log('role--->', this.tokenService.getRole())
      return true;
    } else {
      this.router.navigate([''])
    }
  }

}
