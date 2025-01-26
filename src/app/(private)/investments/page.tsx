import { Header } from "@/components/root/header";
import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

export default async function Investments() {
  const session = await auth();

  return (
    <HydrateClient>
      <Header session={session} />

      <main className="grid place-items-center">investments: todo</main>
    </HydrateClient>
  );
}
