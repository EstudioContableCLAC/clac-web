import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  isMiddle: boolean;
  features: { text: string; active: boolean }[];
}

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingCard {
  plan = input.required<PricingPlan>();

 }
