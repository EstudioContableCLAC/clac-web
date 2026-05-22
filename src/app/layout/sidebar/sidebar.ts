import {  Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html', 
  styleUrl: './sidebar.css',
})
export class Sidebar { 
  sidebarService = inject(SidebarService);
  
  // Señal para controlar el submenú de servicios
  isServicesOpen = signal(false);

  close(): void { 
    this.sidebarService.close(); 
    // Opcional: Contraer el submenú cuando se cierra el sidebar general
    this.isServicesOpen.set(false);
  }

  // Función para abrir/cerrar el acordeón de servicios
  toggleServices(e: Event): void {
    e.preventDefault();
    this.isServicesOpen.update(v => !v);
  }

}
