export default function TestLayout({
  children,
  staticRoute,
  dynamicRoute,
}: Readonly<{
  children: React.ReactNode;
  staticRoute: React.ReactNode;
  dynamicRoute: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {children}
      {staticRoute}
      {dynamicRoute}
    </div>
  );
}
