import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className={navigationMenuTriggerStyle() + " hover:bg-accent/50"}
            >
              About
            </Link>
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
    <NavigationMenuLink asChild className="rounded-md hover:bg-accent/50">
      <Link href={href}>
        <li className="flex h-full select-none flex-col gap-2 p-3">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </li>
      </Link>
    </NavigationMenuLink>
  );
}
