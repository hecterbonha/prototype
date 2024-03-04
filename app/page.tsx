import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Heading } from "@/components/typography";
import ThemeToggle from "@/components/theme/theme-toggle";

const Console = dynamic(() => import("@/components/console"), {
  loading: () => <></>,
});

export const metadata: Metadata = {
  title: "Home | Hecterbonha Prototype",
  description: "Prototype web full of chaos",
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Heading>hello darkness my old friend</Heading>
      </main>
      <Console />
      <ThemeToggle />
    </>
  );
}
