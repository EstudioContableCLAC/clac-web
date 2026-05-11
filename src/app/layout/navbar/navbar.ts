import { Component, HostListener, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html', 
  styleUrl: './navbar.css',
})
export class Navbar {
  private sidebarService = inject(SidebarService);

  isSticky      = signal(false);
  isNavCollapsed = signal(true);
  isTopbarHidden = signal(false);
  isDropdownOpen  = signal(false);
  lastScroll = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isSticky.set(window.scrollY > 0);   

    const currentScroll = window.scrollY;

    // sticky navbar (ya lo tenías)
    this.isSticky.set(currentScroll > 0);

    // lógica topbar
    if (currentScroll > this.lastScroll && currentScroll > 50) {
      this.isTopbarHidden.set(true); // bajar → oculta
    } else {
      this.isTopbarHidden.set(false); // subir → muestra
    }

    this.lastScroll = currentScroll;

  }

  toggleNav(): void {
    this.isNavCollapsed.update(v => !v);
  }

  closeNav(): void {
    this.isNavCollapsed.set(true);
    this.isDropdownOpen.set(false);
  }

  openSidebar(e: Event): void {
    e.preventDefault();
    this.sidebarService.open();
  }
  toggleDropdown(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.isDropdownOpen.update(v => !v);
  }

  // Cierra el dropdown al hacer clic en cualquier parte fuera
  @HostListener('document:click')
  onDocumentClick(): void {
    this.isDropdownOpen.set(false);
  }
  

 }
