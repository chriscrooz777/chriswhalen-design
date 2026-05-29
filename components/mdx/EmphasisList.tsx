interface EmphasisListProps {
  children: React.ReactNode;
}

export function EmphasisList({ children }: EmphasisListProps) {
  return <div className="space-y-sp-5">{children}</div>;
}
