export interface Feature {
  featureName: string;
  metadata: {
    description?: string;
  };
}

export interface PricingPlan {
  planName: string;
  description: string;
  pricePerWeek: number;
  features: Feature[];
}
