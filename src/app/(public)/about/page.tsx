import { Header } from "@/app/components/root/header";
import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

export default async function About() {
  const session = await auth();

  return (
    <HydrateClient>
      <Header session={session} />

      <main className="grid place-items-center">about: todo</main>
    </HydrateClient>
  );
}
