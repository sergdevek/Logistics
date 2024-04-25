import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@gravity-ui/uikit';
import App from './App.tsx'
import './styles/globals.scss'
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { Wrapper } from "./components/wrapper/Wrapper.tsx";

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme="light">
      <Wrapper>
        <App />
      </Wrapper>
    </ThemeProvider>
  </React.StrictMode>
);