import { css } from "../../../styled-system/css";

export function GridOverlay() {
  return (
    <div
      className={css({
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 50,
        padding: "0 100px",
        boxSizing: "border-box",
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1720px",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          opacity: 0.15,
          margin: "0 auto",
        })}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={css({
              backgroundColor: "cyan.400",
              height: "100%",
            })}
          />
        ))}
      </div>
    </div>
  );
}
