import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  features: string[];
  challenge: string;
  faqs: ServiceFaq[];
  // ── Nuevos campos para el header ──────────────────
  headerBg?: {
    type: 'image' | 'video';
    src: string;
    poster?: string; // imagen de respaldo mientras carga el video
  };
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css'
})
export class ServiceDetailComponent {
  data = input.required<ServiceDetailData>();
  pageTitle = input.required<string>();

  // Controla qué FAQ está abierta
  openFaq = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.openFaq.update(current => current === index ? null : index);
  }

  // Lista de servicios para el sidebar
  services = [
    { label: 'Contabilidad y Finanzas', route: '/services/contabilidad' },
    { label: 'Tributación',                  route: '/services/tributacion'      },
    { label: 'Laboral',                  route: '/services/laboral'      },
    { label: 'Software',                  route: '/services/software'      },
    { label: 'Ingeniería',                route: '/services/ingenieria'    },
  ];
}