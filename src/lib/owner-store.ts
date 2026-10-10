import { useState, useEffect, useCallback } from "react";
import { site, allFlatSurfaces, works as defaultWorks } from "./site";

export interface WorkItemConfig {
  id: string;
  title: string;
  material: string;
  area: string;
  image: string; // URL path or compressed Base64 data URL
  category: string;
  featured: boolean;
  tag: string;
  hidden?: boolean;
}

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
  customWorks?: WorkItemConfig[];
  lastUpdated: number;
}

const STORAGE_KEY = "dd_owner_config_v1";
const SESSION_AUTH_KEY = "dd_owner_session_token";
const GALLERY_EVENT_NAME = "dd:gallery-updated";

export const DEFAULT_OWNER_CONFIG: OwnerConfig = {
  officePhoneDisplay: "+91 94825 58936",
  officePhoneE164: "919482558936",
  whatsappDisplay: "+91 93432 22266",
  whatsappE164: "919343222266",
  addressExact: "#8/2 A, 18TH MAIN ROAD, 1ST STAGE, DWARAKANAGAR, CHANNASANDRA, BANGALORE - 560098, KARNATAKA - INDIA",
  hoursNote: "Monday – Saturday: 10:00 AM – 7:00 PM | Sunday: 10:00 AM – 2:30 PM",
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
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(GALLERY_EVENT_NAME));
  }
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

// Client-Side Canvas Image Compression
export async function compressImageFile(file: File, maxDim = 1200, quality = 0.8): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Please upload a valid image file (JPEG, PNG, WebP)."));
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      reject(new Error("Image file exceeds 20 MB limit."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read image file."));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to parse image element."));
      img.onload = () => {
        let targetW = img.naturalWidth || img.width;
        let targetH = img.naturalHeight || img.height;

        if (targetW > maxDim || targetH > maxDim) {
          if (targetW > targetH) {
            targetH = Math.round((targetH * maxDim) / targetW);
            targetW = maxDim;
          } else {
            targetW = Math.round((targetW * maxDim) / targetH);
            targetH = maxDim;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to initialize canvas render context."));
          return;
        }

        ctx.drawImage(img, 0, 0, targetW, targetH);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

// Effective Works: reads customWorks from localStorage or falls back to default curated works
export function getEffectiveWorks(cfg?: OwnerConfig): WorkItemConfig[] {
  const current = cfg || getStoredOwnerConfig();
  if (current.customWorks && Array.isArray(current.customWorks) && current.customWorks.length > 0) {
    return current.customWorks;
  }
  return defaultWorks as unknown as WorkItemConfig[];
}

export function addCustomWork(newItem: Omit<WorkItemConfig, "id">): WorkItemConfig {
  const current = getStoredOwnerConfig();
  const baseWorks = getEffectiveWorks(current);
  const id = `work-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const fullItem: WorkItemConfig = { ...newItem, id };

  const updatedWorks = [fullItem, ...baseWorks];
  saveOwnerConfig({ customWorks: updatedWorks });
  return fullItem;
}

export function updateCustomWork(updatedItem: WorkItemConfig) {
  const current = getStoredOwnerConfig();
  const baseWorks = getEffectiveWorks(current);
  const updatedWorks = baseWorks.map((w) => (w.id === updatedItem.id ? updatedItem : w));
  saveOwnerConfig({ customWorks: updatedWorks });
}

export function replaceCustomWorkImage(id: string, newImageDataUrlOrPath: string) {
  const current = getStoredOwnerConfig();
  const baseWorks = getEffectiveWorks(current);
  const updatedWorks = baseWorks.map((w) => (w.id === id ? { ...w, image: newImageDataUrlOrPath } : w));
  saveOwnerConfig({ customWorks: updatedWorks });
}

export function deleteCustomWork(id: string) {
  const current = getStoredOwnerConfig();
  const baseWorks = getEffectiveWorks(current);
  const updatedWorks = baseWorks.filter((w) => w.id !== id);
  saveOwnerConfig({ customWorks: updatedWorks });
}

export function toggleCustomWorkVisibility(id: string) {
  const current = getStoredOwnerConfig();
  const baseWorks = getEffectiveWorks(current);
  const updatedWorks = baseWorks.map((w) => (w.id === id ? { ...w, hidden: !w.hidden } : w));
  saveOwnerConfig({ customWorks: updatedWorks });
}

export function toggleCustomWorkFeatured(id: string) {
  const current = getStoredOwnerConfig();
  const baseWorks = getEffectiveWorks(current);
  const updatedWorks = baseWorks.map((w) => (w.id === id ? { ...w, featured: !w.featured } : w));
  saveOwnerConfig({ customWorks: updatedWorks });
}

export function resetCustomWorks() {
  saveOwnerConfig({ customWorks: undefined });
}

// React Hook for Synchronized Effective Works
export function useEffectiveWorks(): [
  WorkItemConfig[],
  {
    addWork: (item: Omit<WorkItemConfig, "id">) => void;
    updateWork: (item: WorkItemConfig) => void;
    replaceImage: (id: string, newImage: string) => void;
    deleteWork: (id: string) => void;
    toggleVisibility: (id: string) => void;
    toggleFeatured: (id: string) => void;
    resetToDefaults: () => void;
  },
] {
  const [works, setWorks] = useState<WorkItemConfig[]>(() => getEffectiveWorks());

  useEffect(() => {
    const handleUpdate = () => {
      setWorks(getEffectiveWorks());
    };

    listeners.add(handleUpdate);
    window.addEventListener("storage", handleUpdate);
    window.addEventListener(GALLERY_EVENT_NAME, handleUpdate);

    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener(GALLERY_EVENT_NAME, handleUpdate);
    };
  }, []);

  const helpers = {
    addWork: useCallback((item: Omit<WorkItemConfig, "id">) => {
      addCustomWork(item);
    }, []),
    updateWork: useCallback((item: WorkItemConfig) => {
      updateCustomWork(item);
    }, []),
    replaceImage: useCallback((id: string, newImage: string) => {
      replaceCustomWorkImage(id, newImage);
    }, []),
    deleteWork: useCallback((id: string) => {
      deleteCustomWork(id);
    }, []),
    toggleVisibility: useCallback((id: string) => {
      toggleCustomWorkVisibility(id);
    }, []),
    toggleFeatured: useCallback((id: string) => {
      toggleCustomWorkFeatured(id);
    }, []),
    resetToDefaults: useCallback(() => {
      resetCustomWorks();
    }, []),
  };

  return [works, helpers];
}

// Universal Owner Portal Modal State
let isModalOpen = false;
const modalListeners = new Set<(open: boolean) => void>();

export function openOwnerModal() {
  isModalOpen = true;
  modalListeners.forEach((l) => l(true));
}

export function closeOwnerModal() {
  isModalOpen = false;
  modalListeners.forEach((l) => l(false));
}

export function useOwnerModal(): [boolean, (open: boolean) => void] {
  const [isOpen, setIsOpen] = useState(isModalOpen);

  useEffect(() => {
    const handler = (val: boolean) => setIsOpen(val);
    modalListeners.add(handler);
    return () => {
      modalListeners.delete(handler);
    };
  }, []);

  const setOpen = (val: boolean) => {
    if (val) openOwnerModal();
    else closeOwnerModal();
  };

  return [isOpen, setOpen];
}
