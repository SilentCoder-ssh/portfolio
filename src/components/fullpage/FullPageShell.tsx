import { useEffect, useRef } from "react";
import fullpage, { type FullPageOptions } from "fullpage.js";

type Props = {
  children: React.ReactNode;
  anchors?: string[];
  normalScrollSelector?: string;
};

export default function FullPageShell({
  children,
  anchors,
  normalScrollSelector,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const options: FullPageOptions = {
      autoScrolling: true,
      fitToSection: true,
      scrollingSpeed: 700,
      navigation: true,
      anchors,
      normalScrollElements: normalScrollSelector,
      //licenseKey: "", //voir l'adress mail à partir du 05/10/25

      onLeave(origin) {
        const medias =
          origin.item.querySelectorAll<HTMLMediaElement>("[data-replay]");
        medias.forEach((m) => {
          try {
            m.pause();
            m.currentTime = 0;
          } catch {
            /*ignore*/
          }
        });
      },

      afterLoad(_origin, destination) {
        const medias =
          destination.item.querySelectorAll<HTMLMediaElement>("[data-replay]");
        medias.forEach((m) => {
          try {
            (m as HTMLVideoElement).playsInline = true;
            m.muted = true;
            m.currentTime = 0;
            requestAnimationFrame(() => {
              void m.play().catch(() => {});
            });
          } catch {/*ignore*/}
        });
      },
    };

    new fullpage(containerRef.current, options);

    return () => {
      window.fullpage_api?.destroy("all");
    };
  }, [anchors, normalScrollSelector]);

  return <div ref={containerRef}>{children}</div>;
}
