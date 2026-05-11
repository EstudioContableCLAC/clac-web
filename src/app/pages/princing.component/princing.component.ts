import { ChangeDetectionStrategy, Component } from '@angular/core';
import{RouterLink} from '@angular/router';
import { SectionTitle } from '../../shared/section-title/section-title';
import { PricingCard, PricingPlan } from '../../shared/pricing-card/pricing-card';

@Component({
  selector: 'app-princing.component',
  imports: [SectionTitle, PricingCard],
  templateUrl: './princing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrincingComponent { 
  plans: PricingPlan[] = [
    {
      name: 'Starter', price: 0, isMiddle: false,
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
      features: [
        { text: 'Cras justo odio.',              active: true  },
        { text: 'Dapibus ac facilisis in.',       active: true  },
        { text: 'Morbi leo risus.',               active: false },
        { text: 'Excepteur sint occaecat velit.', active: false },
      ]
    },
    {
      name: 'Exclusive', price: 99, isMiddle: true,
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
      features: [
        { text: 'Cras justo odio.',              active: true  },
        { text: 'Dapibus ac facilisis in.',       active: true  },
        { text: 'Morbi leo risus.',               active: true  },
        { text: 'Excepteur sint occaecat velit.', active: false },
      ]
    },
    {
      name: 'Premium', price: 150, isMiddle: false,
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
      features: [
        { text: 'Cras justo odio.',              active: true },
        { text: 'Dapibus ac facilisis in.',       active: true },
        { text: 'Morbi leo risus.',               active: true },
        { text: 'Excepteur sint occaecat velit.', active: true },
      ]
    }
  ];

}
