import { LineChart } from "@/app/components/root/lineChart";
import { PieChart } from "@/app/components/root/pieChart";
import { ViewTable } from "@/app/components/root/viewTable";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable";
import { getInvestments } from "@/app/hooks/useInvestments";
import { Header } from "@/components/root/header";
import { parseCurrency, parsePercent } from "@/lib/utils";
import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

export default async function Investments() {
  const session = await auth();
  const { monthly, yearly, assetSplit, monthlyPerformance } = getInvestments();

  return (
    <HydrateClient>
      <Header session={session} />

      <main className="grid h-[calc(100vh-5rem)] place-items-center p-8">
        <ResizablePanelGroup direction="vertical" className="gap-1">
          <ResizablePanel defaultSize={55} className="p-0">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel
                defaultSize={25}
                className="grid place-items-center dark:bg-white/5"
              >
                <ViewTable
                  title="Yearly Overview"
                  headers={yearly.headers}
                  rows={yearly.rows.map((row) => [row.title, row.value])}
                  footers={yearly.footers}
                />
              </ResizablePanel>

              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25}>
                <PieChart
                  title="Asset Split"
                  data={assetSplit.data}
                  config={assetSplit.config}
                />
              </ResizablePanel>

              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <LineChart
                  title="Monthly Performance"
                  data={monthlyPerformance.data}
                  config={monthlyPerformance.config}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel>
            <ViewTable
              title="Monthly Overview"
              headers={monthly.headers}
              rows={monthly.rows.map((row) => [
                row.month,
                parseCurrency(row.invested),
                parseCurrency(row.return.currency),
                parsePercent(row.return.percent),
              ])}
              footers={monthly.footers}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </HydrateClient>
  );
}
