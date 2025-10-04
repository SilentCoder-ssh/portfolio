declare module "fullpage.js" {
  export type Direction = "up" | "down";

  export interface FullpageSection {
    item: Element;
    index?: number;
    anchor?: string;
  }

  export interface FullpageApi {
    destroy: (type?: "all" | "sections" | "slides") => void;
    reBuild: () => void;
    moveTo: (anchor: string | number, slideIndex?: number) => void;
  }

  export type FullPageCallback = (
    origin: FullpageSection,
    destination: FullpageSection,
    direction: Direction
  ) => void;

  export interface FullPageOptions {
    autoScrolling?: boolean;
    fitToSection?: boolean;
    scrollingSpeed?: number;
    navigation?: boolean;
    anchors?: string[];
    normalScrollElements?: string;
    licenseKey?: string;
    onLeave?: FullPageCallback;
    afterLoad?: FullPageCallback;
  }

  const FullpageConstructor: new (
    el: HTMLElement | string,
    options?: FullPageOptions
  ) => FullpageApi;

  export default FullpageConstructor;

  // pour éviter (window as any)
  global {
    interface Window {
      fullpage_api?: FullpageApi;
    }
  }
}
