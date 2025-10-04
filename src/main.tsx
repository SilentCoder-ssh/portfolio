import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "fullpage.js/dist/fullpage.css";
import "./index.css";
import { GridOverlayApp } from "./components/grid/Grid-Overlay-App";
import { css } from "../styled-system/css";


// Import the generated route tree
import { routeTree } from "./routeTree.gen";


// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <div
        className={css({
          backgroundColor: "bg.base",
          color: "text.primary",
          fontFamily: "primary",
          minHeight: "100vh",
          width: "100%",
        })}
      >
        <GridOverlayApp />
        
        <RouterProvider router={router} />
      </div>
    </StrictMode>
  );
}
