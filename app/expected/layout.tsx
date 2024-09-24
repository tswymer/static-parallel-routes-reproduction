export const experimental_ppr = true;

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const renderTime = new Date().toISOString();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "coral",
        padding: "20px",
      }}
    >
      <div>
        <h1>Layout (expected to be static)</h1>
        <p>Rendered at: {renderTime}</p>
      </div>

      {children}
    </div>
  );
}
