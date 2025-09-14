import { useState } from "react";
import { css } from "../../../styled-system/css";
import { GridOverlay } from "./Grid-Overlay";


export function GridOverlayApp() {
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div
      className={css({
        position: "relative",
        paddingLeft: "100px",
        paddingRight: "100px",
        
      })}
    >
      {/* Grid Overlay */}
      {showGrid && <GridOverlay />}

      {/* Contenu principal */}
      <main
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          maxWidth: "1720px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 2,
        })}
      >
        {/* Exemple de contenu pour visualiser la grille */}
        {/* <div
          className={css({
            backgroundColor: "blue.200",
            height: "200px",
            borderRadius: "8px",
          })}
        >
          Col 1
        </div>

        <div
          className={css({
            backgroundColor: "green.200",
            height: "200px",
            borderRadius: "8px",
          })}
        >
          Col 2
        </div>

        <div
          className={css({
            backgroundColor: "red.200",
            height: "200px",
            borderRadius: "8px",
          })}
        >
          Col 3
        </div>

        <div
          className={css({
            backgroundColor: "yellow.200",
            height: "200px",
            borderRadius: "8px",
          })}
        >
          Col 4
        </div>
       */}
      </main>
      <button
        onClick={() => setShowGrid(!showGrid)}
        className={css({
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "white",
          color: "black",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 1000,
          border: "1px solid",
          borderColor: "gray.200",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          fontWeight: "bold",
          _hover: {
            backgroundColor: "gray.50",
          },
        })}
      >
        {showGrid ? "Masquer" : "Afficher"} la grille
      </button>
    </div>
  );
}
