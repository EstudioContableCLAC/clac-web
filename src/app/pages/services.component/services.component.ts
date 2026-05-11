import { Component, input, signal } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { ServiceCard, Service} from '../../shared/service-card/service-card';
import {Title} from '@angular/platform-browser';
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
}


@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  
})
export class ServicesComponent {
  
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
    { label: 'Tributación',                  route: '/services/tributacion'},
    { label: 'Laboral',                  route: '/services/laboral'      },
    { label: 'Software',                  route: '/services/software'      },
    { label: 'Ingeniería',                route: '/services/ingenieria'    },
  ];
 }
