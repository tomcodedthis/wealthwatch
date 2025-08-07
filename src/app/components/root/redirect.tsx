"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export function Redirect() {
  useEffect(() => {
    redirect("/investments");
  }, []);

  return <main></main>;
}