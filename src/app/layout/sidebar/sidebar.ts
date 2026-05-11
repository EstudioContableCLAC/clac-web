import {  Component, inject } from '@angular/core';
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
  close(): void { this.sidebarService.close(); }

}
