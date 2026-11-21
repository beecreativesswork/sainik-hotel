type AnalyticsEventName =
  | "phone_click"
  | "directions_click"
  | "menu_visit"
  | "generate_lead";

type Gtag = (
  command: "event",
  eventName: AnalyticsEventName,
  parameters?: Record<string, string>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

function trackEvent(
  eventName: AnalyticsEventName,
  parameters?: Record<string, string>,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    page_location: window.location.href,
    ...parameters,
  });
}

export function trackPhoneClick(): void {
  trackEvent("phone_click", { method: "phone" });
  trackEvent("generate_lead", { method: "phone" });
}

export function trackDirectionsClick(): void {
  trackEvent("directions_click", { destination: "google_maps" });
}

export function trackMenuVisit(): void {
  trackEvent("menu_visit", { destination: "#menu" });
}
