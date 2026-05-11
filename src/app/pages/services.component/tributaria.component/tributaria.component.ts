import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServiceDetailComponent, ServiceDetailData } from '../../../shared/service-detail/service-detail';

@Component({
  selector: 'app-tributaria.component',
  imports: [ServiceDetailComponent],
  templateUrl: './tributaria.component.html',
  styleUrl: './tributaria.component.css',
  standalone: true,

})


export class TributariaComponent implements OnInit { 

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Tributación | CLAC');
  }

  serviceData: ServiceDetailData = {
    headerBg: {
      type: 'image',
      src: 'assets/images/services/images/header-tributario.jpg'
    },
    title: 'Asesoría Tributaria',
    subtitle: 'Cumplimiento seguro, optimización fiscal y defensa ante SUNAT',
    heroImage: 'assets/images/services/images/header-tributacion.png',
    description: 'Nuestro equipo de contadores especializados le brinda asesoría tributaria oportuna, orientada a optimizar su carga fiscal y prevenir contingencias. Le ayudamos a evitar pagos innecesarios de impuestos y a reducir hasta en un 55% el riesgo de multas.',
    features: [
      'Atención de esquelas de citación y cartas inductivas de SUNAT',
      'Levantamiento de notificaciones por desbalance patrimonial',
      'Asistencia y acompañamiento experto en procesos de fiscalización',
      'Solicitud de devolución de impuestos (detracciones y pagos en exceso)',
      'Gestión de fraccionamientos de deudas tributarias',
      'Planeamiento tributario y aplicación de beneficios fiscales'
    ],
    challenge: 'Presentar los impuestos con estrés o fuera de tiempo es un problema común. Nuestro objetivo es blindar a tu empresa ante el ente fiscalizador (SUNAT), asegurando un cumplimiento tributario sin estrés ni multas, e identificando oportunidades legales de ahorro.',
    faqs: [
      {
        question: '¿Qué debo hacer si recibo una carta inductiva o esquela de SUNAT?',
        answer: 'No debes ignorarla. Significa que SUNAT ha detectado inconsistencias. Nuestro equipo analiza la notificación, prepara el sustento técnico-legal y realiza el descargo correspondiente dentro de los plazos establecidos para evitar sanciones.'
      },
      {
        question: '¿Cómo funciona la devolución de detracciones y percepciones?',
        answer: 'Si tienes saldo acumulado en tu cuenta de detracciones o percepciones no aplicadas, la ley permite solicitar su libre disposición o devolución. Nosotros armamos el expediente técnico para que SUNAT apruebe el desembolso a favor de tu liquidez.'
      },
      {
        question: '¿Qué es el planeamiento tributario y es legal en Perú?',
        answer: 'Es 100% legal. Consiste en evaluar y aplicar los beneficios tributarios según el régimen al que perteneces (MYPE Tributario, Régimen General, etc.), estructurando tus operaciones para reducir la carga fiscal dentro del marco de la ley.'
      },
      {
        question: '¿Me pueden ayudar si SUNAT me acusa de desbalance patrimonial?',
        answer: 'Sí. El desbalance ocurre cuando tus gastos o adquisiciones superan tus ingresos declarados. Realizamos una auditoría exhaustiva de tus finanzas para armar el sustento que justifique el origen de tus fondos ante la administración tributaria.'
      }
    ]
  };
}
