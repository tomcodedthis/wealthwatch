"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/app/components/ui/chart";
import { CartesianGrid, LineChart as LChart, Line, XAxis } from "recharts";

export function LineChart({
  data,
  config,
}: Readonly<{
  data?: unknown[];
  config: ChartConfig;
}>) {
  return (
    <ChartContainer
      config={config}
      className="mx-auto h-[85%] w-full text-xs md:text-sm"
    >
      <LChart accessibilityLayer data={data}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent nameKey="title" hideLabel />}
        />
        <CartesianGrid vertical={true} />
        <XAxis
          dataKey="title"
          tickLine={true}
          axisLine={true}
          tickMargin={8}
          tickFormatter={(value: string) => value.slice(0, 3).toUpperCase()}
        />
        <Line
          dataKey="value"
          type="linear"
          stroke="hsl(var(--chart-5))"
          strokeWidth={3}
          dot={false}
        />
      </LChart>
    </ChartContainer>
  );
}
