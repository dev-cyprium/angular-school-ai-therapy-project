import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { UpperFrontReadMoreComponent } from '../sections/upper-front-read-more/upper-front-read-more.component';
import { PricingComponent } from '../sections/pricing/pricing.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeroComponent, UpperFrontReadMoreComponent, PricingComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
