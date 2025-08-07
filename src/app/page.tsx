import { Redirect } from "@/app/components/root/redirect";
import { Header } from "@/components/root/header";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import { redirect } from "next/navigation";
import { use, useEffect } from "react";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <Header session={session} />

      <Redirect />
    </HydrateClient>
  );
}
