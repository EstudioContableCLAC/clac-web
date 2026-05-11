import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
 
})
export class SectionTitle { 

  badge    = input.required<string>();
  title    = input.required<string>();
  subtitle = input.required<string>();
}
