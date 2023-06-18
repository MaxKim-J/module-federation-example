import { Suspense, lazy } from 'react';

function App() {
  // @ts-ignore
  const MicroAppC = lazy(() => import('microAppC/App'));

  return (
    <div>
      <div>Micro App B Loaded</div>
      <h2>Micro App C</h2>
      <Suspense fallback={<div>loading Micro App C</div>}>
        <MicroAppC />
      </Suspense>
    </div>
  );
}

export default App;
