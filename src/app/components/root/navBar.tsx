import { navigationMenuTriggerStyle } from "@/app/components/ui/navigationMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigationMenu";
import Link from "next/link";
import type { ReactNode } from "react";

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Investments</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavTab>
              <NavItem
                title="Overview"
                description="Monitor investment performance in an interactive viewer."
                href="/investments"
              />
              <NavItem
                title="Update"
                description="Verify and ammend investment transactions."
                href="/investments"
              />
            </NavTab>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Budget</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavTab>
              <NavItem
                title="Overview"
                description="Track income and spending in an interactive viewer."
                href="/budget"
              />
              <NavItem
                title="Update"
                description="Verify and ammend personal transcations."
                href="/budget"
              />
            </NavTab>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavTab({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {children}
    </ul>
  );
}

function NavItem({
  title,
  description,
  href,
}: Readonly<{
  title: string;
  description: string;
  href: string;
}>) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href}>
        <li className="h-full hover:bg-accent focus:bg-accent focus:text-accent-foreground flex flex-col gap-2 select-none rounded-md p-3">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {description}
          </p>
        </li>
      </Link>
    </NavigationMenuLink>
  );
}
