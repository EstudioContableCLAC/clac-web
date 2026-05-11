import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer { 
  email = signal('');

  onSubscribe(e: Event): void {
    e.preventDefault();
    console.log('Newsletter:', this.email());
    this.email.set('');
  }

}
