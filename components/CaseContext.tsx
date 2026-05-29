"use client";

import { createContext } from "react";

export interface CaseTestimonial {
  quote: string | null;
  name: string;
  role: string;
  company?: string | null;
}

export interface CaseData {
  testimonial: CaseTestimonial | null;
}

export const CaseContext = createContext<CaseData | null>(null);
