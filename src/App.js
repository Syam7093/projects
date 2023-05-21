import './App.css';
import React , {lazy} from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
const LazyHome = lazy(() => import('./components/Home'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback = 'Loading...'>
           <LazyHome />
        </React.Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
