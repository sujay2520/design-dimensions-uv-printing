import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LightboxItem {
  src: string;
  title: string;
  category?: string;
  substrate?: string;
  description?: string;
}

export interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: LightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setIsLoaded(false);
    onSelectIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setIsLoaded(false);
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "z":
        case "Z":
          setIsZoomed((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar: Counter & Controls */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white/90 z-10 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-mono font-medium backdrop-blur-sm">
            {currentIndex + 1} / {items.length}
          </span>
          {currentItem.category && (
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-accent/30 text-white border border-accent/40 px-3 py-1 text-xs font-medium">
              <Tag className="size-3" />
              {currentItem.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={() => setIsZoomed((prev) => !prev)}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            title={isZoomed ? "Zoom Out (Z)" : "Zoom In (Z)"}
            aria-label={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="size-4" /> : <ZoomIn className="size-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            title="Close Lightbox (Esc)"
            aria-label="Close Lightbox"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 active:scale-95 transition-all z-10 backdrop-blur-sm"
            aria-label="Previous Image"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 active:scale-95 transition-all z-10 backdrop-blur-sm"
            aria-label="Next Image"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}

      {/* Main Image Showcase */}
      <div
        className={cn(
          "relative max-w-5xl max-h-[75vh] flex items-center justify-center transition-transform duration-300",
          isZoomed ? "scale-110 cursor-zoom-out" : "cursor-zoom-in"
        )}
        onClick={() => setIsZoomed((prev) => !prev)}
      >
        <img
          src={currentItem.src}
          alt={currentItem.title}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-10 rounded-full border-2 border-white/20 border-t-accent animate-spin" />
          </div>
        )}
      </div>

      {/* Bottom Info Bar: Title & Substrate Note */}
      <div className="absolute bottom-4 inset-x-4 sm:inset-x-8 text-center pointer-events-none">
        <div className="inline-block max-w-2xl rounded-2xl bg-black/60 backdrop-blur-md px-5 py-3 text-white pointer-events-auto border border-white/10 shadow-lg">
          <h3 className="font-display text-base sm:text-lg font-bold tracking-tight">
            {currentItem.title}
          </h3>
          {currentItem.description && (
            <p className="mt-1 text-xs text-white/80 leading-relaxed">
              {currentItem.description}
            </p>
          )}
          {currentItem.substrate && (
            <p className="mt-1.5 text-[11px] font-mono text-emerald-400">
              Direct Active UV Curing · {currentItem.substrate}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
