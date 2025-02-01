import { ViewTable } from "@/app/components/root/viewTable";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable";
import { getInvestments } from "@/app/hooks/useInvestments";
import { Header } from "@/components/root/header";
import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

export default async function Investments() {
  const session = await auth();
  const { monthly, yearly } = getInvestments();

  return (
    <HydrateClient>
      <Header session={session} />

      <main className="grid h-[calc(100vh-5rem)] place-items-center">
        <ResizablePanelGroup direction="vertical" className="gap-2">
          <ResizablePanel defaultSize={40} className="p-0">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel>
                <ViewTable
                  title="Overview of your yearly investment performance"
                  headers={yearly.headers}
                  rows={yearly.rows.map((row) => [row.title, row.value])}
                  footers={yearly.footers}
                />
              </ResizablePanel>

              <ResizableHandle withHandle />
              <ResizablePanel>Two</ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel>
            <ViewTable
              title="Overview of your monthly investment performance"
              headers={monthly.headers}
              rows={monthly.rows.map((row) => [
                row.month,
                row.invested,
                row.return.currency,
                row.return.percent,
              ])}
              footers={monthly.footers}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </HydrateClient>
  );
}
