import { getIronSession } from "iron-session";
import { sessionOptions } from "@/packages/utils/iron-session-lib";
import { cookies } from "next/headers";
import type { SessionData } from "@/packages/utils/iron-session-lib";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    return Response.json({ status: "Not Authenticated" });
  }
  return Response.json({ status: "Authenticated" });
}
