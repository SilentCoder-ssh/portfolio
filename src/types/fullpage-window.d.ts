export {};

declare global {
    interface Window {
        fullpage_api?: {
            destroy: (type?: "all" | "reset") => void
        }
    }
}