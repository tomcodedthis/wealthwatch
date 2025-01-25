import Link from "next/link";

import { NavBar } from "@/app/components/root/navBar";
import { Button } from "@/app/components/ui/button";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen items-start bg-gradient-to-b from-[#05050b] to-[#010a2b]">
        <header className="flex w-full items-center justify-between p-5">
          <NavBar />

          <div className="flex gap-2">
            {session && <p> Hi {session?.user.name} </p>}
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              <Button>{session ? "Sign Out" : "Sign In"}</Button>
            </Link>
          </div>
        </header>
      </main>
    </HydrateClient>
  );
}
