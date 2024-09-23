export default function TestLayout({
  children,
  staticRoute,
  dynamicRoute,
}: Readonly<{
  children: React.ReactNode;
  staticRoute: React.ReactNode;
  dynamicRoute: React.ReactNode;
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
      {staticRoute}
      {dynamicRoute}
    </div>
  );
}
