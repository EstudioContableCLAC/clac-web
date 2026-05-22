import { Component, AfterViewInit, signal,computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import {SectionTitle} from '../../shared/section-title/section-title';
import { BlogCard, BlogPost } from '../../shared/blog-card/blog-card';
import {Title} from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';

declare var GLightbox: any;

export interface PortfolioItem {
  image: string;
  title: string;
  description: string;
  filter: string;
  link: string;
}

export interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}


@Component({
  selector: 'app-home-clac.component',
  imports: [RouterLink, SectionTitle],
  templateUrl: './home-clac.component.html',
  styleUrl: './home-clac.component.css',
  standalone: true,
  animations: [
    trigger('filterAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.6)' }), 
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0, transform: 'scale(0.6)', width: 0, padding: 0, margin: 0 }))
      ])
    ])
  ],
})



export class HomeClacComponent implements AfterViewInit {

  constructor(private title: Title) {}  // ← inyecta el servicio

   // ── Slider ──────────────────────────────────────────
   // ── Slider ──────────────────────────────────────────
activeSlide = signal(0);
private autoplayInterval: any;

// Variables para detectar arrastre
private dragStartX = 0;
private isDragging = false;
private dragThreshold = 50; // píxeles mínimos para considerar un swipe

slides: Slide[] = [
  {
    image: 'assets/images/slider/slider-1.jpeg',
    title: 'Más que números, ofrecemos soluciones integrales',
    description: 'Confía en los expertos para crecer sin preocupaciones. Te acompañamos en cada paso.',
    buttonText: 'Contáctanos',
    buttonLink: '/contact'
  },
  {
    image: 'assets/images/slider/slider-2.jpg',
    title: 'Estrategias y Soluciones Integrales para tu empresa',
    description: 'Contabilidad, ingeniería e informática bajo un mismo techo.',
    buttonText: 'Nuestros Servicios',
    buttonLink: '/services'
  },
  {
    image: 'assets/images/slider/slider-3.jpg',
    title: 'Expertos que trabajan para tu tranquilidad',
    description: 'Años de experiencia respaldando empresas como la tuya.',
    buttonText: 'Conócenos',
    buttonLink: '/about'
  }
 ];

ngOnInit(): void {
  this.startAutoplay();
  this.title.setTitle('Inicio | CLAC');  // ← actualiza la pestaña
}

ngOnDestroy(): void {
  this.stopAutoplay();
}

startAutoplay(): void {
  // Siempre limpia antes de crear uno nuevo
  this.stopAutoplay();
  this.autoplayInterval = setInterval(() => {
    // Este avance interno NO reinicia el autoplay
    this.activeSlide.update(i => (i + 1) % this.slides.length);
  }, 10000);
}

stopAutoplay(): void {
  if (this.autoplayInterval) {
    clearInterval(this.autoplayInterval);
    this.autoplayInterval = null;
  }
}

// Navegación manual — siempre reinicia el autoplay
goToSlide(index: number): void {
  this.activeSlide.set(index);
  this.startAutoplay(); // startAutoplay ya hace stopAutoplay interno
}

nextSlide(): void {
  this.goToSlide((this.activeSlide() + 1) % this.slides.length);
}

prevSlide(): void {
  this.goToSlide((this.activeSlide() - 1 + this.slides.length) % this.slides.length);
}

// ── Eventos de arrastre (mouse) ──────────────────────
onMouseDown(event: MouseEvent): void {
  this.dragStartX = event.clientX;
  this.isDragging = true;
}

onMouseMove(event: MouseEvent): void {
  if (!this.isDragging) return;
  // Evita seleccionar texto mientras arrastra
  event.preventDefault();
}

onMouseUp(event: MouseEvent): void {
  if (!this.isDragging) return;
  this.isDragging = false;
  const diff = this.dragStartX - event.clientX;
  this.handleDrag(diff);
}

onMouseLeave(event: MouseEvent): void {
  if (!this.isDragging) return;
  this.isDragging = false;
  const diff = this.dragStartX - event.clientX;
  this.handleDrag(diff);
}

// ── Eventos de arrastre (touch / celular) ────────────
onTouchStart(event: TouchEvent): void {
  this.dragStartX = event.touches[0].clientX;
  this.isDragging = true;
}

onTouchEnd(event: TouchEvent): void {
  if (!this.isDragging) return;
  this.isDragging = false;
  const diff = this.dragStartX - event.changedTouches[0].clientX;
  this.handleDrag(diff);
}

// Decide si avanzar o retroceder según la dirección del arrastre
private handleDrag(diff: number): void {
  if (Math.abs(diff) < this.dragThreshold) return; // movimiento muy pequeño, ignorar
  if (diff > 0) {
    this.nextSlide(); // arrastró hacia la izquierda → siguiente slide
  } else {
    this.prevSlide(); // arrastró hacia la derecha → slide anterior
  }
}
  
  
  // El filtro activo — por defecto muestra todos
  activeFilter = signal('all');

  // Categorías de los botones del menú
  filters = [
    { label: 'TODOS',  value: 'all'       },
    { label: 'CONTABILIDAD Y FINANZAS',  value: 'contabilidad'  },
    { label: 'TRIBUTARIA', value: 'tributacion' },
    { label: 'LABORAL', value: 'laboral' },
    { label: 'DESARROLLO DE SOFTWARE',  value: 'software'  },
    { label: 'INGENIERÍA',  value: 'ingenieria'  },
  ];

  // Lista de trabajos con su categoría
  portfolioItems: PortfolioItem[] = [
    { image: 'assets/images/portfolio/pf1.jpg', title: 'Regularización y Cierre de Estados Financieros',  description: 'Reconstrucción contable y liquidación de impuestos de 3 periodos anuales para una empresa del sector comercial.', filter: 'contabilidad', link: '/services/contabilidad'  },
    { image: 'assets/images/portfolio/pf2.jpg', title: 'Auditoría Preventiva y Blindaje Tributario',  description: 'Saneamiento de libros electrónicos y control documentario para la superación exitosa de fiscalizaciones de SUNAT.', filter: 'tributacion', link: '/services/tributacion'  },
    { image: 'assets/images/portfolio/pf3.jpg', title: 'Gestión de Nómina para Regímenes Especiales',  description: 'Implementación de planillas para 150 trabajadores bajo régimen de construcción civil y beneficios sociales.', filter: 'laboral', link: '/services/laboral' },
    { image: 'assets/images/portfolio/pf4.jpg', title: 'Reestructuración de Flujo de Caja Crítico',  description: 'Diseño de modelo de proyecciones financieras que permitió recuperar la liquidez operativa en un plazo de 6 meses.', filter: 'contabilidad', link: '/services/contabilidad' },
    { image: 'assets/images/portfolio/pf5.jpg', title: 'Implementación de Procesos Logísticos en SAP',description: 'Configuración integral de la cadena de suministro y gestión de almacenes para optimizar el flujo de inventarios.', filter: 'software', link: '/services/software'  },
    { image: 'assets/images/portfolio/pf6.jpg', title: 'Desarrollo de sistema de Facturación',     description: 'Desarrollo a medida de una solución de facturación sectorial integrada a SAP para el cálculo de consumos energéticos.', filter: 'software' , link: '/services/software' },
    { image: 'assets/images/portfolio/pf7.jpg', title: 'Optimización de Sistemas de Refrigeración HVAC con CFD',   description: 'Simulación CFD avanzada para el análisis de distribución de aire y eficiencia térmica en grandes infraestructuras.', filter: 'ingenieria', link: '/services/ingenieria' },
    { image: 'assets/images/portfolio/pf8.jpg', title: 'Visión Artificial para Control Industrial',     description: 'Implementación de algoritmos de Deep Learning para la detección de anomalías y automatización de procesos.', filter: 'ingenieria'  , link: '/services/ingenieria'},
    
  ];

  // computed() recalcula automáticamente cuando activeFilter cambia
  // Si el filtro es 'all' muestra todo, sino filtra por categoría
  filteredItems = computed(() =>
    this.activeFilter() === 'all'
      ? this.portfolioItems
      : this.portfolioItems.filter(item => item.filter === this.activeFilter())
  );

  setFilter(value: string): void {
    this.activeFilter.set(value);
  }

  ngAfterViewInit(): void {}


  clientLogos = [
    { src: 'assets/images/client-logo/YACHAYLOGO.svg',        alt: 'YACHAY'          },
    { src: 'assets/images/client-logo/CEBIFANLOGO.svg',           alt: 'CEBIFAN'             },
    { src: 'assets/images/client-logo/CONSORCIOLOGO.svg',           alt: 'CONSORCIO'             },
    { src: 'assets/images/client-logo/MINIMARKETLOGO.svg',        alt: 'MINIMARKET'          },
    { src: 'assets/images/client-logo/Verlat-Energy-Logo.png',alt: 'VERLAT' },
    { src: 'assets/images/client-logo/MDLOGO.png',         alt: 'MD'           },
  ];


}
