import { Card, CardTitle } from "@/app/components/ui/card";
import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: Readonly<SectionProps>) {
  return (
    <Card className="flex h-full w-full flex-col place-items-center bg-black p-4 bg-card">
      <CardTitle className="text-muted-foreground mb-4 text-xs font-extralight uppercase md:text-lg">
        {title}
      </CardTitle>
      {children}
    </Card>
  );
}
