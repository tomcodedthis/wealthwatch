"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/app/components/ui/chart";
import { CartesianGrid, LineChart as LChart, Line, XAxis } from "recharts";

export function LineChart({
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
    </div>
  );
}
