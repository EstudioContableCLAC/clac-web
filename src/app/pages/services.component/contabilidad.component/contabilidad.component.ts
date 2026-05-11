import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServiceDetailComponent, ServiceDetailData } from '../../../shared/service-detail/service-detail'

@Component({
  selector: 'app-contabilidad.component',
  imports: [ServiceDetailComponent],
  templateUrl: './contabilidad.component.html',
  styleUrl: './contabilidad.component.css',
 
})
export class ContabilidadComponent implements OnInit { 
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Contabilidad y Finanzas | CLAC');
  }

  serviceData: ServiceDetailData = {
    headerBg: {
      type: 'image',
      src: 'assets/images/services/images/header-contabilidad.png'
    },
    title: 'Contabilidad y Finanzas',
    subtitle: 'Gestión integral para el orden y la rentabilidad de tu negocio',
    heroImage: 'assets/images/services/images/header-finanzas.png',
    description: 'Brindamos información contable y financiera oportuna y confiable, para que usted pueda enfocarse en gestionar y mejorar la rentabilidad de su negocio. Convertimos tus datos en herramientas clave, garantizando hasta un 70% más de control financiero.',
    features: [
      'Registro y análisis de operaciones con presentación de libros PLE y SIRE',
      'Preparación de estados financieros y cierre contable',
      'Análisis de ingresos, costos y gastos operativos',
      'Elaboración y control del flujo de caja',
      'Proyección financiera y evaluación de liquidez',
      'Reportes gerenciales claros para la toma de decisiones'
    ],
    challenge: 'Muchas empresas no tienen claridad de cuánto están ganando realmente o dependen totalmente de su contador para entender sus números. Nuestro desafío es democratizar esa información, dándote reportes claros que te permitan tomar el control total de tus ingresos y gastos.',
    faqs: [
      {
        question: '¿Qué son el PLE y el SIRE y por qué son obligatorios en Perú?',
        answer: 'El PLE (Programa de Libros Electrónicos) y el SIRE (Sistema Integrado de Registros Electrónicos) son plataformas de SUNAT para el registro de compras y ventas. Nosotros nos encargamos de su validación y envío puntual para evitar multas.'
      },
      {
        question: '¿Cómo me ayuda el análisis de flujo de caja a no quebrar?',
        answer: 'El flujo de caja proyecta cuándo entrará y saldrá el dinero de tu empresa. Te permite anticipar si tendrás liquidez para pagar planillas, impuestos o proveedores, evitando el sobreendeudamiento.'
      },
      {
        question: '¿Cuál es la diferencia entre llevar solo la contabilidad y tener asesoría financiera?',
        answer: 'La contabilidad tradicional registra lo que ya pasó para cumplir con el estado. La asesoría financiera usa esa misma información para ver el futuro: evaluar la rentabilidad, analizar indicadores y planificar el crecimiento de tu negocio.'
      },
      {
        question: '¿Pueden auditar o reconstruir la contabilidad de años anteriores?',
        answer: 'Sí, realizamos el análisis y conciliación de cuentas contables pasadas, regularizando cualquier desorden documentario para dejar tu empresa al día y lista para cualquier evaluación bancaria.'
      }
    ]
  };

}
