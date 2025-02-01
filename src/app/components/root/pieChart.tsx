"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/app/components/ui/chart";
import { PieChart as PChart, Pie } from "recharts";

export function PieChart({
  title,
  data,
  config,
}: Readonly<{
  title: string;
  data?: unknown[];
  config: ChartConfig;
}>) {
  return (
    <div className="block h-full place-items-center">
      <h1 className="text-muted-foreground text-sm">{title}</h1>
      <ChartContainer
        config={config}
        className="mx-auto aspect-square h-full w-full"
      >
        <PChart>
          <ChartTooltip
            content={<ChartTooltipContent nameKey="value" hideLabel />}
          />
          <ChartLegend
            content={<ChartLegendContent nameKey="title" />}
            className="-translate-y-4 gap-4 text-sm"
          />
          <Pie
            data={data}
            dataKey="value"
            labelLine={false}
            isAnimationActive={false}
            nameKey="title"
          />
        </PChart>
      </ChartContainer>
    </div>
  );
}
