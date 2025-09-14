import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import { GridOverlayApp } from "./components/Grid/Grid-Overlay-App";
import Nav from "./components/Nav";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { css } from "../styled-system/css";


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
        <Nav />
        <RouterProvider router={router} />
      </div>
    </StrictMode>
  );
}
