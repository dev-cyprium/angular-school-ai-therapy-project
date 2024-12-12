import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PricingPlan } from './types';
import { BehaviorSubject, finalize } from 'rxjs';
import { lowercaseJsonKeys } from '../data';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  private baseApiUrl = 'http://localhost:8080';
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPricingPlans() {
    this.loadingSubject.next(true);
    return this.http
      .get<PricingPlan[]>(`${this.baseApiUrl}/pricing`)
      .pipe(lowercaseJsonKeys())
      .pipe(
        finalize(() => {
          this.loadingSubject.next(false);
        })
      );
  }
}
