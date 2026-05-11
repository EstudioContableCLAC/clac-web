import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServiceDetailComponent, ServiceDetailData } from '../../../shared/service-detail/service-detail';

@Component({
  selector: 'app-laboral.component',
  imports: [ServiceDetailComponent],
  templateUrl: './laboral.component.html',
  styleUrl: './laboral.component.css',
  standalone: true,

})
export class LaboralComponent implements OnInit { 
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Laboral | CLAC');
  }

  serviceData: ServiceDetailData = {
    headerBg: {
      type: 'image',
      src: 'assets/images/services/images/header-rrhh.jpg'
    },
    title: 'Asesoría Laboral',
    subtitle: 'Gestión de planillas y prevención de contingencias laborales',
    heroImage: 'assets/images/services/images/header-laboral.jpg',
    description: 'Brindamos un servicio integral de gestión de planillas y cumplimiento laboral, orientado a prevenir contingencias y optimizar los procesos de su empresa. A través de nuestro outsourcing laboral, reducimos sus costos operativos y mejoramos la gestión de su personal.',
    features: [
      'Procesamiento de planillas y emisión de boletas de pago',
      'Cálculo de beneficios sociales (CTS, gratificaciones, vacaciones)',
      'Declaración mensual de obligaciones en PLAME y T-Registro',
      'Elaboración de contratos de trabajo y liquidaciones de personal',
      'Asesoría preventiva ante inspecciones de SUNAFIL',
      'Auditoría de cumplimiento laboral normativo'
    ],
    challenge: 'La normativa laboral peruana es compleja y cambia constantemente, exponiendo a las empresas a multas severas por parte de SUNAFIL. Asumimos la responsabilidad de gestionar sus obligaciones laborales con eficiencia y seguridad, permitiéndole enfocarse en el crecimiento de su negocio.',
    faqs: [
      {
        question: '¿Qué obligaciones debo cumplir al contratar a un trabajador en planilla?',
        answer: 'Debes darle de alta en el T-Registro antes del inicio de sus labores, emitir boletas de pago mensuales, declarar en el PLAME, y realizar los cálculos y pagos de beneficios sociales como CTS, gratificaciones, vacaciones y aportes a EsSalud/ONP/AFP.'
      },
      {
        question: '¿Qué es el outsourcing laboral y qué beneficios tiene para mi empresa?',
        answer: 'Consiste en delegar toda la carga operativa de las planillas a especialistas (CLAC). Esto te permite ahorrar en costos de software, evitar errores de cálculo que generen multas, y garantizar la confidencialidad de los sueldos de tu empresa.'
      },
      {
        question: '¿Cómo debo preparar mi empresa ante una fiscalización de SUNAFIL?',
        answer: 'Debes tener actualizados los contratos de trabajo, el registro de control de asistencia, las boletas firmadas, los depósitos de beneficios sociales y las políticas de Seguridad y Salud en el Trabajo (SST). Nosotros te preparamos para cumplir con todos los requerimientos.'
      },
      {
        question: '¿Me ayudan con el cálculo de liquidaciones por renuncia o despido?',
        answer: 'Sí, elaboramos el cálculo exacto de la liquidación de beneficios sociales truncos (vacaciones, CTS, gratificaciones), asegurando que el pago se realice dentro de las 48 horas exigidas por ley para evitar intereses y sanciones.'
      }
    ]
  };


}
