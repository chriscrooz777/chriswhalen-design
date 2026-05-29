"use client";

import { useContext } from "react";
import { CaseContext } from "@/components/CaseContext";
import { Testimonial } from "@/components/Testimonial";

export function TestimonialBreak() {
  const caseData = useContext(CaseContext);
  if (!caseData?.testimonial?.quote) return null;

  return (
    <Testimonial
      quote={caseData.testimonial.quote}
      name={caseData.testimonial.name}
      role={caseData.testimonial.role}
      company={caseData.testimonial.company}
    />
  );
}
