import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SMECache } from '../CommonModules/ClientCache';
import { StringConstants } from '../CommonModules/Constants';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { 
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean {
        if (SMECache.GetCache(StringConstants.isUserAuthenticated) === "true") {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}