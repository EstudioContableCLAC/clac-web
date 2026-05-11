import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface BlogPost {
  image: string;
  authorImage: string;
  author: string;
  title: string;
  excerpt: string;
}

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html', 
})
export class BlogCard {
  post = input.required<BlogPost>();
 }
