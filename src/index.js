import React from "react";
import { createRoot } from 'react-dom/client';

import Router from "./Router";
import "./styles/reset.css";
import "./styles/common.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
