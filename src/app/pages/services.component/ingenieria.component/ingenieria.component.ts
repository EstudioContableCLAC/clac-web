import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface DemoItem {
  id: string;
  type: 'video' | 'image';
  title: string;
  description: string;
  url?: string;
  embedUrl?: SafeResourceUrl;
}

interface Faq {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-ingenieria',
  imports: [RouterLink],
  templateUrl: './ingenieria.component.html',
  styleUrls: ['./ingenieria.component.css'] // Asegúrate de enlazar aquí el mismo CSS que usas en software
})
export class IngenieriaComponent implements OnInit {

  private titleService = inject(Title);
  private metaService  = inject(Meta);
  private sanitizer    = inject(DomSanitizer);

  demoItems: DemoItem[] = [];

  ngOnInit(): void {
    // Optimización SEO
    this.titleService.setTitle('Ingeniería, Simulaciones CFD y Gemelos Digitales | CLAC');
    this.metaService.updateTag({
      name: 'description',
      content: 'Especialistas en simulaciones termo-fluidodinámicas (CFD), diseño HVAC, eficiencia energética e inteligencia artificial industrial (Digital Twins) en Perú.'
    });

    // ── Videos y Renders (Tus simulaciones reales) ──
    const items = [
      {
        id: 'ggxyWluI0wQ', // Reemplaza con tu ID
        type: 'video' as const,
        title: 'Simulación CFD: Optimización HVAC en Sala NOC (Ica)',
        description: 'Análisis termofluidodinámico en ANSYS para garantizar la disipación de calor de equipos críticos y evitar puntos calientes en zonas de alta temperatura.'
      },
      {
        id: 'render-iluminacion',
        type: 'image' as const,
        title: 'Estudio Fotométrico y Luxometría Hospitalaria',
        description: 'Modelado 3D de iluminación en centro médico para validar niveles de luxes bajo normativa, garantizando confort visual y precisión clínica.',
        url: 'assets/images/services/images/iluminacion.png' // Coloca una captura de tu reporte de iluminarias
      }
    ];

    this.demoItems = items.map(item => {
      if (item.type === 'video') {
        return {
          ...item,
          embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1&controls=1`
          )
        };
      }
      return item;
    });
  }

  // ── Capacidades CORE (CFD y Renovables) ────────────────
  cfdServices: ServiceCard[] = [
    {
      icon: 'lni lni-rocket',
      title: 'Diseño y Simulación HVAC',
      description: 'Optimizamos sistemas de ventilación y aire acondicionado industrial para evitar zonas muertas de calor.'
    },
    {
      icon: 'lni lni-sun',
      title: 'Eficiencia y Renovables',
      description: 'Estudios de consumo, dimensionamiento de paneles solares y facturación del COES (Sector Energético).'
    },
    {
      icon: 'lni lni-bulb',
      title: 'Estudios de Iluminación',
      description: 'Cálculo de lúmenes y renderizado para cumplir con normas de seguridad y salud ocupacional.'
    },
    {
      icon: 'lni lni-control-panel',
      title: 'Extracción de Monóxido (CO)',
      description: 'Simulación de flujos de escape en sótanos y estacionamientos para garantizar calidad de aire segura.'
    }
  ];

  // ── I+D / Inteligencia Artificial (El futuro) ────────────
  innovationServices: ServiceCard[] = [
    {
      icon: 'lni lni-network',
      title: 'Digital Twins (Gemelos Digitales)',
      description: 'Replicamos tu infraestructura física en un modelo virtual para predecir fallas y simular escenarios operativos.'
    },
    {
      icon: 'lni lni-eye',
      title: 'Visión Artificial Industrial',
      description: 'Modelos de Machine Learning para inspección automática de calidad, detección de anomalías y control de inventarios.'
    },
    {
      icon: 'lni lni-stats-up',
      title: 'Mantenimiento Predictivo',
      description: 'Análisis de datos de sensores y maquinaria para anticipar roturas, utilizando algoritmos de aprendizaje automático.'
    },
    {
      icon: 'lni lni-cloud-sync',
      title: 'Integración SCADA & ERP',
      description: 'Conectamos los datos de tus PLCs y maquinaria directamente con tu sistema financiero o SAP Business One.'
    }
  ];

  // ── Por qué elegirnos ───────────────────────────────────
  reasons = [
    {
      icon: 'lni lni-layers',
      title: 'Visión Integral',
      description: 'Unimos la física pura (termodinámica) con la tecnología (datos y software) para darte soluciones completas.'
    },
    {
      icon: 'lni lni-shield',
      title: 'Mitigación de Riesgos',
      description: 'Simular en computadora es infinitamente más barato que corregir errores físicos en plena construcción.'
    },
    {
      icon: 'lni lni-rocket',
      title: 'Innovación Continua',
      description: 'Aplicamos los últimos avances en Machine Learning para mantener tu empresa a la vanguardia industrial.'
    }
  ];

  // ── FAQ ─────────────────────────────────────────────────
  faqs: Faq[] = [
    {
      question: '¿En qué etapa de mi proyecto debo solicitar una simulación CFD?',
      answer: 'El mayor retorno de inversión se da en la fase de ingeniería de detalle (diseño). Evaluar el flujo de aire o calor antes de comprar e instalar equipos te permite redimensionar ductos y capacidades sin sobrecostos de obra.',
      open: false
    },
    {
      question: '¿Qué es un Gemelo Digital (Digital Twin)?',
      answer: 'Es una representación virtual exacta de un objeto o sistema físico. Lo alimentamos con datos reales para simular cómo reaccionaría tu planta ante cambios térmicos, de producción o ambientales sin poner en riesgo la operación real.',
      open: false
    },
    {
      question: '¿Cómo aplican la Visión Artificial a las empresas?',
      answer: 'Entrenamos modelos de IA para que las cámaras de seguridad o industriales "entiendan" lo que ven. Sirve para conteo automatizado, detección de defectos en líneas de ensamblaje o verificación de uso de EPP (cascos, chalecos).',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}