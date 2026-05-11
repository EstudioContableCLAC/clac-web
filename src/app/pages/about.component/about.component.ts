import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import {Title, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { YoutubeAutoplayDirective } from '../../shared/directives/youtube-autoplay.directive';
import { RouterLink } from '@angular/router';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
}

@Component({
  selector: 'app-about.component',
  standalone: true,
  imports: [SectionTitle, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AboutComponent {
  
  // Usamos un objeto simple en lugar de un array, ya que es imagen única
  headerData = {
    image: 'assets/images/about/header-about.png', // Aquí pones tu imagen técnica
    title: 'Nosotros',
    description: 'Eficiencia operativa diseñada con rigor técnico, ética y vanguardia digital.'
  };
  
  constructor(private title: Title) {}  // ← inyecta el servicio
  ngOnInit(): void {  
    this.title.setTitle('Nosotros | CLAC');  // ← actualiza la pestaña
  }
  
  activeTab = signal<'who' | 'vision' | 'history'>('who');

  setTab(tab: 'who' | 'vision' | 'history'): void {
    this.activeTab.set(tab);
  }
  
  private sanitizer    = inject(DomSanitizer);
  videos: VideoItem[] = [
    {
      id: 'Z-5wBy3DO-w',  // ← tu ID de YouTube Short
      title: '¿Quiénes somos?',
      description: 'Conoce al equipo detrás de CLAC y nuestra historia de compromiso con nuestros clientes.',
      features: [
        'Enfoque integral en contabilidad',
        'Equipo de especialistas certificados',
        'Ambiente profesional y moderno',
        'Asesoría basada en experiencia',
        'Tu crecimiento es nuestra prioridad'
      ],
      buttonText: 'Visítanos en YouTube',
      buttonUrl: 'https://www.youtube.com/@SolucionesCLAC'
    },
    {
      id: '38q1kG1wLi8',  // ← tu segundo Short
      title: 'Nuestros Servicios',
      description: 'Una mirada a todo lo que ofrecemos para impulsar el crecimiento de tu empresa con soluciones integrales.',
      features: [
        'Contabilidad y Finanzas',
        'Consultoría Tributaria',
        'Consultoría Laboral',
        'Desarrollo de software',
        'Ingeniería y proyectos'
        
      ],
      buttonText: 'Ver todos los servicios',
      buttonUrl: '/services'
    },
  ];

 // Genera URL segura para el iframe
  // Para Shorts la URL correcta es /shorts/ID no /embed/ID
  getEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  clientLogos = [
    { src: 'assets/images/client-logo/graygrids.svg',        alt: 'Graygrids'          },
    { src: 'assets/images/client-logo/uideck.svg',           alt: 'UIDeck'             },
    { src: 'assets/images/client-logo/ayroui.svg',           alt: 'AyroUI'             },
    { src: 'assets/images/client-logo/lineicons.svg',        alt: 'LineIcons'          },
    { src: 'assets/images/client-logo/tailwindtemplates.svg',alt: 'Tailwind Templates' },
    { src: 'assets/images/client-logo/ecomhtml.svg',         alt: 'EcomHTML'           },
  ];

 }
