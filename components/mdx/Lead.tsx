interface LeadProps {
  children: React.ReactNode;
}

export function Lead({ children }: LeadProps) {
  return (
    <p className="text-[20px] font-body font-normal leading-[1.55] text-ink mb-sp-5">
      {children}
    </p>
  );
}
