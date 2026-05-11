import { Injectable } from '@angular/core';

// Le dice a TypeScript que YT existe como variable global
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  
  private apiLoaded = false;
  private apiReady = false;
  private callbacks: (() => void)[] = [];

  // Carga el script de YouTube una sola vez en toda la app
  load(): Promise<void> {
    return new Promise(resolve => {

      // Si ya está lista, resuelve inmediatamente
      if (this.apiReady) {
        resolve();
        return;
      }

      // Guarda el callback para cuando esté lista
      this.callbacks.push(resolve);

      // Solo carga el script una vez
      if (this.apiLoaded) return;
      this.apiLoaded = true;

      // Función que YouTube llama cuando su API está lista
      window.onYouTubeIframeAPIReady = () => {
        this.apiReady = true;
        this.callbacks.forEach(cb => cb());
        this.callbacks = [];
      };

      // Agrega el script de YouTube al documento
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    });
  }

}
