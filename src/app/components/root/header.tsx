import { NavBar } from "@/app/components/root/navBar";
import { Button } from "@/app/components/ui/button";
import type { Session } from "next-auth";
import Link from "next/link";

export function Header({ session }: Readonly<{ session: Session | null }>) {
  return (
    <header className="flex h-[6vh] min-h-[70px] w-full items-center justify-center gap-8 p-0 md:gap-12">
      <NavBar />

      {session && <p> Hi {session?.user.name} </p>}
      <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
        <Button>{session ? "Sign Out" : "Sign In"}</Button>
      </Link>
    </header>
  );
}
