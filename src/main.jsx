import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import GlobalStyles from './styles/globalStyles.js';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
