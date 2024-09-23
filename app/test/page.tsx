export default function Root() {
  const renderTime = new Date().toISOString();

  return (
    <div style={{ backgroundColor: "orange", padding: "10px" }}>
      <h2>Static Root Page: {renderTime} (expected to be static)</h2>
      <p>Rendered at: {renderTime}</p>
    </div>
  );
}
