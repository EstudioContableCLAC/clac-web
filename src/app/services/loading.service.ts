import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private router = inject(Router);
  isLoading = signal(false);

  init(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading.set(false);
      }
    });
  }

}
