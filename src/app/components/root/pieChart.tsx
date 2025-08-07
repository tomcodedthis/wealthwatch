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
  data,
  config,
}: Readonly<{
  data?: unknown[];
  config: ChartConfig;
}>) {
  return (
    <ChartContainer
      config={config}
      className="mx-auto aspect-square h-[90%] w-full text-xs md:text-sm"
    >
      <PChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="value" hideLabel />}
        />
        <ChartLegend
          content={<ChartLegendContent nameKey="title" />}
          className="-translate-y-4 gap-4"
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
  );
}
