export default function Parent() {
  const renderTime = new Date().toISOString();

  return (
    <div style={{ backgroundColor: "orange", padding: "10px" }}>
      <h2>Static Page (expected to be static)</h2>
      <p>Rendered at: {renderTime}</p>
    </div>
  );
}
