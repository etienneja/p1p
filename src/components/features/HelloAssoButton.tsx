import { Button } from "@/components/ui/Button";

interface HelloAssoButtonProps {
  url: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export function HelloAssoButton({ url, label = "Réserver sur HelloAsso", size = "md" }: HelloAssoButtonProps) {
  return (
    <Button href={url} variant="secondary" size={size} external>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      {label}
    </Button>
  );
}
