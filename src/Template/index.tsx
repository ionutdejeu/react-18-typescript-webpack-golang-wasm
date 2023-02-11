import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { LoadWasm } from '../loadWasm/index';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <LoadWasm>
      <button onClick={() => {
        alert(`Result from WebAssembly: ${window.myGolangFunction(2, 3)}`);
      }} >Call Golang Web Assembly Method</button>
    </LoadWasm>
  </React.StrictMode>
);
