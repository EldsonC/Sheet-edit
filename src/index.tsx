import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Style } from './assets/style/globalStyle';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Style/>
      <App />
  </React.StrictMode>
);

