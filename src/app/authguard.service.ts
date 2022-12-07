import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {ProductService} from '../service/product.service'

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private productService: ProductService, private router: Router) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.canActivate(childRoute,state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.productService.isauthenticated())
        {
            return true;
        }
        else
        {
            this.router.navigate(['/401']);
        }
       
    }

    
}