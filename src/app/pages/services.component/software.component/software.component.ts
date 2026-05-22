import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ServiceDetailComponent } from '../../../shared/service-detail/service-detail';


interface SapAddon {
  icon: string;
  title: string;
  description: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface DemoVideo {
  id: string;
  title: string;
  description: string;
  embedUrl: SafeResourceUrl; // ← URL pre-calculada
}

interface Faq {
  question: string;
  answer: string;
  open: boolean;
}


@Component({
  selector: 'app-software.component',
  imports: [RouterLink, ServiceDetailComponent],
  templateUrl: './software.component.html',
  styleUrl: './software.component.css',
 
})
export class SoftwareComponent { 

  private titleService = inject(Title);
  private metaService  = inject(Meta);
  private sanitizer    = inject(DomSanitizer);

 
  demoVideos: DemoVideo[] = [];

  ngOnInit(): void {
    this.titleService.setTitle('Consultor SAP y Desarrollo de Software en Lima, Perú | CLAC');
    this.metaService.updateTag({
      name: 'description',
      content: 'Soporte e implementación SAP, desarrollo Power BI, sistemas web y automatización empresarial en Lima, Perú.'
    });

    // ← Pre-calcula las URLs una sola vez aquí
    const videos = [
      {
        id: 'SEE2fpHS-Xo',  // ← reemplaza con tu ID real
        title: 'Demo: Pagos Masivos BCP (Telecrédito) en SAP',
        description: 'Automatiza la generación del archivo TXT para transferencias del BCP en SAP, eliminando reprocesos y errores manuales.'
      },
      {
        id: 'h7MVBLvERok',  // ← reemplaza con tu ID real
        title: 'Demo: Conciliación SIRE SUNAT vs SAP B1',
        description: 'Cruza y audita masivamente la propuesta del Registro de Compras (RCE) de SUNAT contra los comprobantes ingresados en tu ERP para detectar discrepancias al instante.'
      }
    ];

    this.demoVideos = videos.map(v => ({
      ...v,
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1&controls=1`
      )
    }));
  }

 

  // ── Addons SAP (Optimizados para SEO B2B) ────────────────
  sapAddons: SapAddon[] = [
    {
      icon: 'lni lni-files',
      title: 'Facturación Electrónica desde XML',
      description: 'Automatiza la creación de facturas en SAP Business One procesando masivamente archivos XML de SUNAT. Cero digitación manual.'
    },
    {
      icon: 'lni lni-cloud',
      title: 'Integración SIRE SUNAT - SAP B1',
      description: 'Sincronización bidireccional entre tu ERP y el Sistema Integrado de Registros Electrónicos (RVIE y RCE) de SUNAT.'
    },
    {
      icon: 'lni lni-users',
      title: 'Validación de RUC y Alta de Terceros',
      description: 'Creación automática de maestros de clientes y proveedores en SAP, validando condición y estado directamente con la API de SUNAT/Reniec.'
    },
    {
      icon: 'lni lni-plug',
      title: 'Integración API REST / SOAP',
      description: 'Conectamos SAP B1 con e-commerce (Shopify, WooCommerce), facturadores electrónicos y CRMs externos mediante Service Layer.'
    },
    {
      icon: 'lni lni-envelope',
      title: 'Alertas y Flujos de Aprobación',
      description: 'Desarrollo de notificaciones automáticas por correo para ruptura de stock, vencimientos de cartera y autorizaciones de compras.'
    },
    {
      icon: 'lni lni-cog',
      title: 'Desarrollo SDK a Medida',
      description: 'Programación de Add-ons personalizados usando SAP B1 SDK (DI API / UI API) para procesos logísticos o industriales específicos.'
    }
  ];

  // ── Otros servicios (Mostrando tu versatilidad técnica) ──
  otherServices: ServiceCard[] = [
    {
      icon: 'lni lni-bar-chart',
      title: 'Business Intelligence (Power BI)',
      description: 'Extracción de datos de bases SQL/HANA para construir Dashboards financieros y comerciales en tiempo real. Toma decisiones basadas en datos.'
    },
    {
      icon: 'lni lni-world',
      title: 'Sistemas Web y Portales B2B',
      description: 'Desarrollo Full Stack (Angular, React, Node.js) para crear portales de proveedores, intranets o sistemas de gestión a medida.'
    },
    {
      icon: 'lni lni-laptop',
      title: 'Software Desktop & Automatización',
      description: 'Aplicaciones nativas para Windows enfocadas en el control de hardware, lectura de balanzas industriales o procesos batch.'
    },
    {
      icon: 'lni lni-rocket',
      title: 'Landing Pages y Webs Corporativas',
      description: 'Diseño y desarrollo de sitios web optimizados para conversión (SEO) integrados directamente con tu embudo de ventas.'
    },
    {
      icon: 'lni lni-network',
      title: 'IA y Visión Artificial (R&D)',
      description: 'Implementación de modelos de Machine Learning y Visión por Computadora para automatización industrial y control de calidad predictivo.'
    },
    {
      icon: 'lni lni-grid-alt',
      title: 'Macros VBA e Ingeniería de Datos',
      description: 'Transformamos flujos de trabajo lentos en Excel mediante Macros avanzadas, conectándolas a bases de datos corporativas.'
    }
  ];
  // ── Por qué elegirnos ───────────────────────────────────
  reasons = [
    {
      icon: 'lni lni-certificate',
      title: 'Experiencia real en SAP',
      description: 'Años de experiencia implementando y soportando SAP Business One en empresas peruanas de distintos rubros.'
    },
    {
      icon: 'lni lni-briefcase',
      title: 'Soluciones a medida',
      description: 'No vendemos productos genéricos — analizamos tu proceso y desarrollamos exactamente lo que tu empresa necesita.'
    },
    {
      icon: 'lni lni-reload',
      title: 'Soporte continuo',
      description: 'Te acompañamos después de la implementación con mantenimiento, capacitación y mejoras continuas.'
    }
  ];

  // ── FAQ ─────────────────────────────────────────────────
  faqs: Faq[] = [
    {
      question: '¿Qué es SAP Business One y para qué tipo de empresa es?',
      answer: 'SAP Business One es un sistema ERP diseñado para pequeñas y medianas empresas. Integra contabilidad, ventas, compras, inventario y producción en una sola plataforma. Es ideal para empresas en crecimiento que necesitan centralizar su información.',
      open: false
    },
    {
      question: '¿Cuánto tiempo toma implementar SAP Business One?',
      answer: 'Depende del alcance y la complejidad de los procesos. Una implementación básica para logística y tesorería puede tomar entre 6 y 12 semanas. Definimos el cronograma exacto en una reunión inicial sin costo.',
      open: false
    },
    {
      question: '¿Qué es un addon y cuándo lo necesito?',
      answer: 'Un addon es una extensión de SAP que agrega funcionalidades específicas no incluidas en el sistema estándar. Lo necesitas cuando tienes procesos propios de tu industria o país — como la integración con SUNAT o la automatización de facturación desde XML — que SAP estándar no cubre.',
      open: false
    },
    {
      question: '¿Pueden conectar SAP con otros sistemas que ya uso?',
      answer: 'Sí. Desarrollamos integraciones entre SAP y otros sistemas mediante APIs REST, servicios web SOAP o transferencias de archivos. Evaluamos la viabilidad técnica en una consulta inicial.',
      open: false
    },
    {
      question: '¿Qué tan útil es Power BI para mi empresa?',
      answer: 'Power BI te permite visualizar en tiempo real los indicadores más importantes de tu negocio — ventas, costos, flujo de caja, rendimiento por área — en dashboards interactivos accesibles desde cualquier dispositivo. Es especialmente útil si actualmente tomas decisiones basándote en reportes de Excel manuales.',
      open: false
    },
    {
      question: '¿Trabajan con empresas fuera de Lima?',
      answer: 'Sí. Prestamos servicios de forma remota a empresas en cualquier parte del Perú. Para implementaciones SAP que requieren presencia en sitio, coordinamos visitas según el proyecto.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
