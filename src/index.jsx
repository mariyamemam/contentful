import React from 'react';
import { createRoot } from 'react-dom/client';

// Remove Contentful imports
// import { GlobalStyles } from '@contentful/f36-components';
// import { SDKProvider } from '@contentful/react-apps-toolkit';

import HomePage from './components/HomePage';

const container = document.getElementById('root');
const root = createRoot(container);

// Render without Contentful SDK
root.render(<HomePage />);