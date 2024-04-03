import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design | Hecterbonha Prototype",
  description: "Prototype web full of chaos",
};
export default function Page() {
  return (
    <div>
      <div className="p-4">
        <p className="font-mono font-light text-sm">{"<Heading />"}</p>
        <h1 className="text-4xl font-extrabold font-sans">
          What needs to be done then?
        </h1>
      </div>
    </div>
  );
}
