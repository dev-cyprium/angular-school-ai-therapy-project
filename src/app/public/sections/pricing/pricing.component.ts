import { Component, OnInit } from '@angular/core';
import { PricingCardComponent } from '../../../shared/pricing-card/pricing-card.component';
import { PricingService } from '../../../data/pricing/pricing.service';
import { PricingPlan } from '../../../data/pricing/types';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    PricingCardComponent,
    CommonModule,
    HttpClientModule,
    LoadingSpinnerComponent,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent implements OnInit {
  plans: PricingPlan[] = [];
  isLoading$ = this.pricingService.loading$;
  errorMessage = '';

  constructor(private pricingService: PricingService) {}

  ngOnInit(): void {
    this.pricingService.getPricingPlans().subscribe({
      next: (plans) => {
        console.log(plans);
        this.plans = plans;
      },
      error: (error) => {
        console.error(error);
        this.errorMessage =
          'An error occurred while loading the pricing plans.';
      },
    });
  }
}
