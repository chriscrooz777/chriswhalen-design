"use client";

import { CaseContext, type CaseData } from "@/components/CaseContext";

interface CaseProviderProps {
  data: CaseData;
  children: React.ReactNode;
}

export function CaseProvider({ data, children }: CaseProviderProps) {
  return <CaseContext.Provider value={data}>{children}</CaseContext.Provider>;
}
