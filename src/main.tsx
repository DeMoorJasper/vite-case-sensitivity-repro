import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Button } from "./button";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <div>
        <h1>Hello World!</h1>

        <Button>Click me!</Button>
      </div>
    </StrictMode>
  );
}
