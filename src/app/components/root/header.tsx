import { NavBar } from "@/app/components/root/navBar";
import { Button } from "@/app/components/ui/button";
import type { Session } from "next-auth";
import Link from "next/link";

export async function Header({
  session,
}: Readonly<{ session: Session | null }>) {
  return (
    <header className="flex w-full items-center justify-between p-5">
      <NavBar />

      <div className="flex gap-2">
        {session && <p> Hi {session?.user.name} </p>}
        <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
          <Button>{session ? "Sign Out" : "Sign In"}</Button>
        </Link>
      </div>
    </header>
  );
}
