export default function Home() {
  const renderTime = new Date().toISOString();

  return (
    <>
      <p>Rendered at: {renderTime} (correctly static)</p>
      Go to <a href="/test">/test</a> to see reproduction (parallel routes not
      supported on root layout)
    </>
  );
}
