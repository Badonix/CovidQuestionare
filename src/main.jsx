import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FormProvider } from 'src/context';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
