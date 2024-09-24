import { headers } from "next/headers";

export default function ParallelRoute() {
  const renderTime = new Date().toISOString();

  const country = headers().get("X-Vercel-IP-Country");

  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>
      <h3>Page (dynamic)</h3>
      <p>Rendered at: {renderTime}</p>
      <p>X-Vercel-IP-Country header (causing dynamic rendering): {country}</p>
    </div>
  );
}
