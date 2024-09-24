export default function ExamplePage() {
  const renderTime = new Date().toISOString();

  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>
      <h3>Static Page</h3>
      <p>Rendered at: {renderTime}</p>

      <a href="/example/dynamic">Go to dynamic page</a>
      <br />
      <a href="/example/static">Go to static page</a>
    </div>
  );
}
