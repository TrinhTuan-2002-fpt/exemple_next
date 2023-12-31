"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
