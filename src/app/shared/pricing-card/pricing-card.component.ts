import { Component, Input } from '@angular/core';
import { PricingPlan } from '../../data/pricing/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent {
  @Input() plan: PricingPlan | undefined;
}
