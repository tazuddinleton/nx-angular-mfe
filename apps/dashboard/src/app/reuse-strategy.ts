import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

@Injectable()
export class ReuseStrategy implements RouteReuseStrategy {
  private routeStore: Map<string | undefined, DetachedRouteHandle | null> =
    new Map();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {

    return route.routeConfig?.path === 'advanced'
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {

    if (route.routeConfig != null) {
      this.routeStore.set(route.routeConfig.path, handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {

    if (route.routeConfig != null) {
      return this.routeStore.has(route.routeConfig.path);
    }
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {

    if (route.routeConfig != null) {
      return this.routeStore.get(route.routeConfig.path) as DetachedRouteHandle;
    }
    return null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {

    return this.isRouteSame(future, curr);
  }

  private isRouteSame(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    if (curr.routeConfig !== null && future.routeConfig === curr.routeConfig) {
      return future.queryParams['url'] === curr.queryParams['url'];
    } else {
      return future.routeConfig === curr.routeConfig;
    }
  }
}
