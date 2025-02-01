import { INVESTMENT_OVERVIEW } from "@/app/(private)/investments/mockData";
import { ViewTable } from "@/app/components/root/viewTable";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable";
import { Header } from "@/components/root/header";
import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

export default async function Investments() {
  const session = await auth();
  const investments = INVESTMENT_OVERVIEW;

  return (
    <HydrateClient>
      <Header session={session} />

      <main className="grid h-[calc(100vh-5rem)] place-items-center p-8">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel>One</ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel>Two</ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel className="p-4">
            <ViewTable
              title="Overview of your monthly investment performance"
              headers={investments.headers}
              rows={investments.rows.map((row) => [
                row.month,
                row.invested,
                row.return.currency,
                row.return.percent,
              ])}
              footers={investments.footers}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </HydrateClient>
  );
}
