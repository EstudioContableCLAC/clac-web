import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
.then(() => {
  // Angular cargó — oculta el splash
  const splash = document.getElementById('app-splash');
  if (splash) {
    splash.classList.add('hidden');
    // Elimina el elemento del DOM después de la transición
    setTimeout(() => splash.remove(), 600);
  }
})
.catch(err => {
  console.error(err);
  // Si hay error, oculta el splash igual para no bloquear la pantalla
  const splash = document.getElementById('app-splash');
  if (splash) splash.remove();
});
