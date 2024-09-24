export default function RootLayout({ children }) {
  const renderTime = new Date().toISOString();

  return (
    <html>
      <head />
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "magenta",
            padding: "20px",
          }}
        >
          <div>
            <h1>Root Layout (expected to be static)</h1>
            <p>Rendered at: {renderTime}</p>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
