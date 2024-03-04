import { Suspense } from "react";
import { ConnectForm } from "./form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect | Hecterbonha Prototype",
  description: "Prototype web full of chaos",
};

export default function Page() {
  return (
    <>
      <Suspense fallback={<p className="text-lg">Loading...</p>}>
        <ConnectForm />
      </Suspense>
    </>
  );
}
