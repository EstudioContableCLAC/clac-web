import { Component, HostListener, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'clac-web';
  showScrollTop = signal(false);  
  loadingService = inject(LoadingService);

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop.set(window.scrollY > 50);
   
  }

  scrollToTop(e: Event): void {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
