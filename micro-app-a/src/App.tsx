import { Suspense, lazy } from 'react';

function App() {
  // @ts-ignore
  const MicroAppB = lazy(() => import('microAppB/App'));

  return (
    <div>
      <h1>Micro App A</h1>
      <div>
        <h2>Micro App B</h2>
        <Suspense fallback={<div>loading Micro App B</div>}>
          <MicroAppB />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
