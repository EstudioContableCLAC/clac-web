import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Service {
  icon: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html', 
})
export class ServiceCard {
  service = input.required<Service>();

 }
