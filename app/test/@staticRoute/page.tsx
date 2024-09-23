export default function StaticParallelRoute() {
  const renderTime = new Date().toISOString();

  return (
    <div style={{ backgroundColor: "orange", padding: "10px" }}>
      <h3>Static Parallel Route (expected to be static)</h3>
      <p>Rendered at: {renderTime}</p>
    </div>
  );
}
