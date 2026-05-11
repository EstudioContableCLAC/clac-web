import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isOpen = signal(false);
  open():  void { this.isOpen.set(true);  }
  close(): void { this.isOpen.set(false); }
}