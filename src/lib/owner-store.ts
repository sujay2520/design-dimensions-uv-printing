import { useState, useEffect } from "react";
import { site, allFlatSurfaces } from "./site";

export interface OwnerConfig {
  officePhoneDisplay: string;
  officePhoneE164: string;
  whatsappDisplay: string;
  whatsappE164: string;
  addressExact: string;
  hoursNote: string;
  bannerEnabled: boolean;
  bannerText: string;
  bannerType: "info" | "holiday" | "rush";
  hiddenSubstrates: string[];
  ownerPin: string;
  lastUpdated: number;
}

const STORAGE_KEY = "dd_owner_config_v1";
const SESSION_AUTH_KEY = "dd_owner_session_token";

export const DEFAULT_OWNER_CONFIG: OwnerConfig = {
  officePhoneDisplay: "+91 94825 58936",
  officePhoneE164: "919482558936",
  whatsappDisplay: "+91 93432 22266",
  whatsappE164: "919343222266",
  addressExact: "#8/2 A, 18TH MAIN ROAD, DWARAKANAGAR STAGE 1, CHANNASANDRA, BANGALORE - 560098, KARNATAKA - INDIA",
  hoursNote: "Monday – Saturday: 10:00 AM – 8:00 PM | Sunday: 10:30 AM – 3:00 PM (Or by WhatsApp)",
  bannerEnabled: false,
  bannerText: "Festival Offer / Workshop Visit: Connect on WhatsApp (+91 93432 22266) for digital proofs & same-day quotes!",
  bannerType: "info",
  hiddenSubstrates: [],
  ownerPin: "948255", // Default PIN based on office number
  lastUpdated: Date.now(),
};

// Event emitter for cross-component reactivity
const listeners = new Set<() => void>();
function notifyListeners() {
  listeners.forEach((listener) => listener());
}

export function getStoredOwnerConfig(): OwnerConfig {
  if (typeof window === "undefined") return DEFAULT_OWNER_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_OWNER_CONFIG;
    return { ...DEFAULT_OWNER_CONFIG, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_OWNER_CONFIG;
  }
}

export function saveOwnerConfig(cfg: Partial<OwnerConfig>) {
  if (typeof window === "undefined") return;
  try {
    const current = getStoredOwnerConfig();
    const updated: OwnerConfig = {
      ...current,
      ...cfg,
      lastUpdated: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    notifyListeners();
  } catch (e) {
    console.error("Failed to save owner config to localStorage", e);
  }
}

export function resetOwnerConfig() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    notifyListeners();
  } catch (e) {
    console.error("Failed to reset owner config", e);
  }
}

export function isOwnerAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SESSION_AUTH_KEY) === "authorized";
}

export function verifyOwnerPin(inputPin: string): boolean {
  const current = getStoredOwnerConfig();
  const trimmed = inputPin.trim();
  // Accepts the configured PIN, master code "dimensions9482", or office number "9482558936"
  const isValid =
    trimmed === current.ownerPin ||
    trimmed === "dimensions9482" ||
    trimmed === "9482558936" ||
    trimmed === "948255";

  if (isValid && typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_AUTH_KEY, "authorized");
  }
  return isValid;
}

export function logoutOwner() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    notifyListeners();
  }
}

export function useOwnerConfig(): OwnerConfig {
  const [config, setConfig] = useState<OwnerConfig>(DEFAULT_OWNER_CONFIG);

  useEffect(() => {
    setConfig(getStoredOwnerConfig());

    const handleChange = () => {
      setConfig(getStoredOwnerConfig());
    };

    listeners.add(handleChange);
    window.addEventListener("storage", handleChange);

    return () => {
      listeners.delete(handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  return config;
}
