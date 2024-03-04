import type { ReactNode } from "react";

export default function DesignLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <div>Design Layout</div>
      {children}
    </div>
  );
}
