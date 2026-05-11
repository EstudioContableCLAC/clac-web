import {  Directive, ElementRef, Input,
  OnInit, OnDestroy, inject } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';


@Directive({
  selector: '[youtubeAutoplay]',
  standalone: true
})
export class YoutubeAutoplayDirective  implements OnInit, OnDestroy{ 

  @Input('youtubeAutoplay') videoId!: string;

  private el = inject(ElementRef);
  private youtubeService = inject(YoutubeService);

  private player: any = null;
  private observer: IntersectionObserver | null = null;
  private containerId: string;

  constructor() {
    this.containerId = `yt-player-${Math.random().toString(36).substr(2, 9)}`;
  }

  async ngOnInit(): Promise<void> {
    this.el.nativeElement.id = this.containerId;
    await this.youtubeService.load();

    this.player = new window.YT.Player(this.containerId, {
      videoId: this.videoId,
      playerVars: {
        autoplay:        0,
        mute:            1,  // ← mute necesario para autoplay en navegadores
        controls:        1,
        rel:             0,
        modestbranding:  1,
        playsinline:     1,
        loop:            1,  // ← loop para Shorts cortos
        playlist:        this.videoId // necesario para que loop funcione
      },
      events: {
        onReady: () => this.setupObserver()
      }
    });
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!this.player) return;
          if (entry.isIntersecting) {
            this.player.playVideo();
          } else {
            this.player.pauseVideo();
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
    if (this.player)   this.player.destroy();
  }
}
