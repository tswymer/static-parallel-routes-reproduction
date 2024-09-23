export default function Root() {
  const renderTime = new Date().toISOString();

  return (
    <div style={{ backgroundColor: "orange" }}>
      <h1>Static Root Page: {renderTime} (expected to be static)</h1>
      <p>Rendered at: {renderTime}</p>
    </div>
  );
}
