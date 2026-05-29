interface SubheadProps {
  children: React.ReactNode;
}

export function Subhead({ children }: SubheadProps) {
  return (
    <p className="font-display text-[18px] font-medium mt-sp-6 mb-sp-2">
      {children}
    </p>
  );
}
