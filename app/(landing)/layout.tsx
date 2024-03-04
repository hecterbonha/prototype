import type { ReactNode } from "react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div>Top Nav</div>
      <div className="fixed top-0 right-0 w-[128px] h-screen border-l-2 border-neutral-700 dark:border-neutral-200">
        Side Div
      </div>
      {children}
    </>
  );
}
