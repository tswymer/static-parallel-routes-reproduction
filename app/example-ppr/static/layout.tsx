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
        backgroundColor: "yellow",
        padding: "20px",
      }}
    >
      <div>
        <h1>Static Page Layout (expected to be static)</h1>
        <p>Rendered at: {renderTime}</p>
      </div>

      {children}
    </div>
  );
}
