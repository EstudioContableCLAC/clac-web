import { ChangeDetectionStrategy, Component,signal, inject, AfterViewInit, NgZone } from '@angular/core';
import { FormsModule , NgForm} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import emailjs from '@emailjs/browser';

declare const turnstile: any; // le dice a TypeScript que turnstile existe globalmente

const EMAILJS_SERVICE_ID  = 'service_clacweb';
const EMAILJS_TEMPLATE_ID = 'template_4kbg8yr';
const EMAILJS_PUBLIC_KEY  = 'uTTzWa4ASZbiD0Jhi';
// Detecta si estás en local o en producción
const TURNSTILE_SITE_KEY ='0x4AAAAAADDNGUHZ4e-hFZef';  // ← clave de prueba en local


interface ContactForm {
  name: string;
  email: string;
  phone: string;
  RUC: string;
  message: string;
  honeypot: string;
}

@Component({
  selector: 'app-contact.component',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements AfterViewInit {
  
  // Usamos un objeto simple en lugar de un array, ya que es imagen única
  headerData = {
    image: 'assets/images/contact/page-header-bg.jpg', // Aquí pones tu imagen técnica
    title: 'Hablemos de tu proyecto',
    description: 'Ya sea que necesites orden contable, consultoría en SAP o una simulación de ingeniería, estamos aquí para asesorarte.'
  };
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contacto | CLAC');
  }

  private zone = inject(NgZone);

  isLoading  = signal(false);
  submitted  = signal(false);
  hasError   = signal(false);
  errorMsg   = signal('');

  private turnstileToken = ''; // guarda el token que devuelve Turnstile

  form: ContactForm = {
    name: '', email: '', phone: '',
    RUC: '', message: '', honeypot: ''
  };

  ngAfterViewInit(): void {
    // Renderiza el widget de Turnstile después de que el DOM esté listo
    if (typeof turnstile !== 'undefined') {
      turnstile.render('#turnstile-container', {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        callback: (token: string) => {
          // Cuando Turnstile verifica al usuario, guarda el token
          this.zone.run(() => {
            this.turnstileToken = token;
          });
        },
        'expired-callback': () => {
          // Si el token expira, limpia y renueva
          this.zone.run(() => {
            this.turnstileToken = '';
            turnstile.reset('#turnstile-container');
          });
        }
      });
    }
  }

  onSubmit(f: NgForm): void {
    // 1. Valida campos obligatorios
    if (f.invalid) {
      f.form.markAllAsTouched();
      return;
    }

    // 2. Verifica honeypot
    if (this.form.honeypot) return;

    // 3. Verifica que Turnstile haya dado token
    if (!this.turnstileToken) {
      this.hasError.set(true);
      this.errorMsg.set('Por favor espera la verificación de seguridad.');
      return;
    }

    this.isLoading.set(true);
    this.hasError.set(false);
    this.enviar(f);
  }

  private async enviar(f: NgForm): Promise<void> {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:  this.form.name,
          email: this.form.email,
          phone:      this.form.phone,
          RUC:    this.form.RUC,
          message:    this.form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      this.submitted.set(true);
      this.resetForm(f);
      setTimeout(() => this.submitted.set(false), 5000);

    } catch (error) {
      this.hasError.set(true);
      this.errorMsg.set('Hubo un error al enviar. Inténtalo de nuevo.');
      console.error('EmailJS error:', error);
      // Renueva el widget de Turnstile al fallar
      if (typeof turnstile !== 'undefined') {
        turnstile.reset('#turnstile-container');
        this.turnstileToken = '';
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  private resetForm(f: NgForm): void {
    this.form = {
      name: '', email: '', phone: '',
      RUC: '', message: '', honeypot: ''
    };
    f.resetForm();
    // Renueva Turnstile después del envío exitoso
    if (typeof turnstile !== 'undefined') {
      turnstile.reset('#turnstile-container');
      this.turnstileToken = '';
    }
  }

 }
