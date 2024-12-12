import { Injectable } from '@angular/core';
import { PricingPlan } from './types';
import { BehaviorSubject } from 'rxjs';
import { ApiClientService } from '../http/api-client.service';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.api.loading$;

  constructor(private api: ApiClientService) {}

  getPricingPlans() {
    this.loadingSubject.next(true);
    return this.api.get<PricingPlan[]>('/pricing');
  }
}
