export default function ParallelRoute() {
  const renderTime = new Date().toISOString();

  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>
      <h3>Static Page</h3>
      <p>Rendered at: {renderTime}</p>
    </div>
  );
}
