import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Lock,
  Unlock,
  Check,
  AlertCircle,
  Phone,
  MessageSquare,
  Layers,
  Megaphone,
  Calculator,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Upload,
  Plus,
  Trash2,
  Star,
  Edit2,
  Search,
  Camera,
  FolderOpen,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  useOwnerConfig,
  useOwnerModal,
  saveOwnerConfig,
  resetOwnerConfig,
  isOwnerAuthenticated,
  verifyOwnerPin,
  logoutOwner,
  useEffectiveWorks,
  compressImageFile,
  WorkItemConfig,
} from "@/lib/owner-store";
import { allFlatSurfaces } from "@/lib/site";

interface OwnerPortalModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const GALLERY_CATEGORIES = [
  "Doors & Panels",
  "Glass & Glazing",
  "Acrylic & Signage",
  "Wood & Laminates",
  "ACP & Metal",
  "Devotional & Sanctum",
  "Workshop & Machine",
] as const;

const STUDIO_PHOTO_PRESETS = [
  { label: "WPC Doors Showroom Display", path: "/prints/uv-wpc-doors-showroom.jpg", category: "Doors & Panels", material: "WPC Doors" },
  { label: "WPC Luxury Entrance Door", path: "/prints/uv-wpc-luxury-entrance-door.jpg", category: "Doors & Panels", material: "WPC Doors" },
  { label: "WPC Dual Display Boards", path: "/prints/uv-wpc-boards-dual-display.jpg", category: "Doors & Panels", material: "WPC Doors" },
  { label: "Decorative WPC Interior Door", path: "/prints/uv-wpc-door-carved-sample.jpg", category: "Doors & Panels", material: "WPC Doors" },
  { label: "Kamadhenu Pooja Door Panel", path: "/prints/kamadhenu-door.jpg", category: "Doors & Panels", material: "WPC Doors" },
  { label: "Sliding Wardrobe TFN Profile Glass", path: "/prints/uv-wardrobe-tfn-sliding-glass.jpg", category: "Glass & Glazing", material: "Glass" },
  { label: "Frosted Dandelion Glass Craft", path: "/prints/special-dandelion-glass-shelf.jpg", category: "Glass & Glazing", material: "Glass" },
  { label: "Bharatanatyam Dancer Frosted Glass", path: "/prints/uv-dancer-frosted-glass.jpg", category: "Glass & Glazing", material: "Glass" },
  { label: "Kitchen Glass Counter Backsplash", path: "/prints/uv-glass-kitchen-backsplash.jpg", category: "Glass & Glazing", material: "Glass" },
  { label: "Tirupati Balaji Gold Acrylic Panel", path: "/prints/uv-balaji-gold-acrylic-panel.jpg", category: "Devotional & Sanctum", material: "Acrylic" },
  { label: "Radha Krishna Glass Mural", path: "/prints/radha-krishna-glass.jpg", category: "Devotional & Sanctum", material: "Glass" },
  { label: "Lakshmi Pooja Room Panel", path: "/prints/uv-lakshmi-pooja-panel.jpg", category: "Devotional & Sanctum", material: "Acrylic" },
  { label: "Shiva Parvati Pooja Art Panel", path: "/prints/uv-shiva-parvati-pooja-panel.jpg", category: "Devotional & Sanctum", material: "Acrylic" },
  { label: "Krishna Living Room Backdrop", path: "/prints/uv-krishna-livingroom-backdrop.jpg", category: "Devotional & Sanctum", material: "Canvas" },
  { label: "Kannada Wood Cafe Signage", path: "/prints/uv-kannada-wood-cafe-signage.jpg", category: "Wood & Laminates", material: "Wood" },
  { label: "Graffiti Lion Wood Grain Art", path: "/prints/graffiti-lion-wood.jpg", category: "Wood & Laminates", material: "Wood" },
  { label: "CSIR-NAL VVIP Foundation Plaque", path: "/prints/csir-nal-foundation.jpg", category: "ACP & Metal", material: "Stainless Steel (SS)" },
  { label: "Brushed Aluminium Name Board", path: "/prints/uv-aluminium-name-board.jpg", category: "ACP & Metal", material: "Metal" },
  { label: "3D Embossed Cast Acrylic Sign", path: "/prints/uv-acrylic-embossed-signage.jpg", category: "Acrylic & Signage", material: "Acrylic" },
  { label: "Waterproof Ceramic Tiles Print", path: "/prints/uv-ceramic-tiles-waterproof.jpg", category: "Glass & Glazing", material: "Ceramic" },
  { label: "Industrial Flatbed Active UV Printer", path: "/prints/uv-printer-active-curing-head.jpg", category: "Workshop & Machine", material: "Metal" },
];

export function OwnerPortalModal({ isOpen: propIsOpen, onClose: propOnClose }: OwnerPortalModalProps = {}) {
  const [globalOpen, setGlobalOpen] = useOwnerModal();
  const isOpen = propIsOpen !== undefined ? propIsOpen : globalOpen;
  const onClose = propOnClose !== undefined ? propOnClose : () => setGlobalOpen(false);

  const config = useOwnerConfig();
  const [effectiveWorks, galleryHelpers] = useEffectiveWorks();

  const [authed, setAuthed] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<"gallery" | "contact" | "banner" | "substrates" | "quoter" | "security">("gallery");

  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  // Form states: Contact & Banner
  const [officePhone, setOfficePhone] = useState(config.officePhoneDisplay);
  const [whatsappPhone, setWhatsappPhone] = useState(config.whatsappDisplay);
  const [address, setAddress] = useState(config.addressExact);
  const [hours, setHours] = useState(config.hoursNote);
  const [bannerEnabled, setBannerEnabled] = useState(config.bannerEnabled);
  const [bannerText, setBannerText] = useState(config.bannerText);
  const [bannerType, setBannerType] = useState(config.bannerType);
  const [substrateSearch, setSubstrateSearch] = useState("");
  const [newPin, setNewPin] = useState("");

  // Gallery Management States
  const [showAddForm, setShowAddForm] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<string>("All");
  const [gallerySearch, setGallerySearch] = useState<string>("");
  const [isCompressing, setIsCompressing] = useState(false);
  const [editingItem, setEditingItem] = useState<WorkItemConfig | null>(null);

  // New Work Item Form
  const [newTitle, setNewTitle] = useState("");
  const [newMaterial, setNewMaterial] = useState("Direct UV on Waterproof WPC Board");
  const [newSubstrate, setNewSubstrate] = useState("WPC Doors");
  const [newCategory, setNewCategory] = useState<(typeof GALLERY_CATEGORIES)[number]>("Doors & Panels");
  const [newArea, setNewArea] = useState("Studio Showroom, Bengaluru");
  const [newTag, setNewTag] = useState("WPC Door");
  const [newFeatured, setNewFeatured] = useState(true);
  const [newImagePreview, setNewImagePreview] = useState<string>("/prints/uv-wpc-doors-showroom.jpg");

  const addFileInputRef = useRef<HTMLInputElement>(null);
  const replaceFileInputRef = useRef<HTMLInputElement>(null);
  const [targetReplaceId, setTargetReplaceId] = useState<string | null>(null);

  // Quoter state
  const [quoteSubstrate, setQuoteSubstrate] = useState<string>(allFlatSurfaces[0]);
  const [quoteDims, setQuoteDims] = useState("4ft x 8ft");
  const [quoteQty, setQuoteQty] = useState("1");
  const [quoteClient, setQuoteClient] = useState("");
  const [quoteNotes, setQuoteNotes] = useState("");

  useEffect(() => {
    if (isOpen) {
      setAuthed(isOwnerAuthenticated());
      setOfficePhone(config.officePhoneDisplay);
      setWhatsappPhone(config.whatsappDisplay);
      setAddress(config.addressExact);
      setHours(config.hoursNote);
      setBannerEnabled(config.bannerEnabled);
      setBannerText(config.bannerText);
      setBannerType(config.bannerType);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, config, onClose]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyOwnerPin(pinInput)) {
      setAuthed(true);
      setPinError(false);
      setPinInput("");
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    logoutOwner();
    setAuthed(false);
    onClose();
  };

  const showSaveFeedback = (msg: string) => {
    setSavedNotice(msg);
    setTimeout(() => setSavedNotice(null), 3000);
  };

  // Image Upload Handlers
  const handleAddNewImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsCompressing(true);
      const compressedDataUrl = await compressImageFile(file, 1200, 0.8);
      setNewImagePreview(compressedDataUrl);
      showSaveFeedback(`Photo compressed and ready! (${Math.round((file.size / 1024))} KB -> ${Math.round((compressedDataUrl.length * 0.75) / 1024)} KB)`);
    } catch (err: any) {
      alert(err.message || "Failed to process image file.");
    } finally {
      setIsCompressing(false);
      if (addFileInputRef.current) addFileInputRef.current.value = "";
    }
  };

  const handleReplaceImageClick = (itemId: string) => {
    setTargetReplaceId(itemId);
    if (replaceFileInputRef.current) {
      replaceFileInputRef.current.click();
    }
  };

  const handleReplaceImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !targetReplaceId) return;

    try {
      setIsCompressing(true);
      const compressedDataUrl = await compressImageFile(file, 1200, 0.8);
      galleryHelpers.replaceImage(targetReplaceId, compressedDataUrl);
      showSaveFeedback("Photo replaced successfully! Change is now live on /work & /.");
    } catch (err: any) {
      alert(err.message || "Failed to replace image.");
    } finally {
      setIsCompressing(false);
      setTargetReplaceId(null);
      if (replaceFileInputRef.current) replaceFileInputRef.current.value = "";
    }
  };

  const handleCreateNewWork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      alert("Please enter a project title.");
      return;
    }
    if (!newImagePreview) {
      alert("Please upload or select an image.");
      return;
    }

    galleryHelpers.addWork({
      title: newTitle.trim(),
      material: newMaterial.trim() || `Direct UV on ${newSubstrate}`,
      area: newArea.trim() || "Studio Showroom, Bengaluru",
      image: newImagePreview,
      category: newCategory,
      featured: newFeatured,
      tag: newTag.trim() || newSubstrate,
      hidden: false,
    });

    showSaveFeedback(`"${newTitle}" added to live portfolio gallery!`);
    setShowAddForm(false);
    // Reset inputs
    setNewTitle("");
    setNewArea("Studio Showroom, Bengaluru");
    setNewTag(newSubstrate);
  };

  const handleSaveEditItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    galleryHelpers.updateWork(editingItem);
    showSaveFeedback(`Updated "${editingItem.title}"!`);
    setEditingItem(null);
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanOfficeE164 = officePhone.replace(/[^\d]/g, "");
    const cleanWhatsappE164 = whatsappPhone.replace(/[^\d]/g, "");
    saveOwnerConfig({
      officePhoneDisplay: officePhone,
      officePhoneE164: cleanOfficeE164,
      whatsappDisplay: whatsappPhone,
      whatsappE164: cleanWhatsappE164,
      addressExact: address,
      hoursNote: hours,
    });
    showSaveFeedback("Contact settings updated successfully!");
  };

  const handleSaveBanner = (e: React.FormEvent) => {
    e.preventDefault();
    saveOwnerConfig({
      bannerEnabled,
      bannerText,
      bannerType,
    });
    showSaveFeedback(bannerEnabled ? "Website banner is now LIVE!" : "Website banner deactivated.");
  };

  const handleToggleSubstrate = (name: string) => {
    const isHidden = config.hiddenSubstrates.includes(name);
    let updated: string[];
    if (isHidden) {
      updated = config.hiddenSubstrates.filter((s) => s !== name);
    } else {
      updated = [...config.hiddenSubstrates, name];
    }
    saveOwnerConfig({ hiddenSubstrates: updated });
  };

  const handleSaveNewPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      saveOwnerConfig({ ownerPin: newPin.trim() });
      setNewPin("");
      showSaveFeedback("Owner PIN updated successfully!");
    } else {
      alert("Please enter a PIN with at least 4 digits.");
    }
  };

  const handleGenerateQuoteWhatsApp = () => {
    const rawNumber = config.whatsappE164 || "919343222266";
    const lines = [
      "*Design Dimensions — Official Quote Enquiry*",
      "",
      `*Client:* ${quoteClient.trim() || "Walk-In / Phone Customer"}`,
      `*Material:* ${quoteSubstrate}`,
      `*Dimensions:* ${quoteDims.trim()}`,
      `*Quantity:* ${quoteQty.trim()} unit(s)`,
      quoteNotes.trim() ? `*Notes:* ${quoteNotes.trim()}` : "",
      "",
      "*Studio:* #8/2 A, 18th Main Road, 1st Stage, Dwarakanagar, Channasandra, Bangalore - 560098",
      `*Office:* ${config.officePhoneDisplay || "+91 94825 58936"}`,
    ].filter(Boolean);

    const encoded = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${rawNumber}?text=${encoded}`, "_blank");
  };

  // Filtered gallery items
  const filteredWorks = effectiveWorks.filter((w) => {
    const matchCat = galleryFilter === "All" || w.category === galleryFilter;
    const matchSearch =
      gallerySearch.trim() === "" ||
      w.title.toLowerCase().includes(gallerySearch.toLowerCase()) ||
      w.material.toLowerCase().includes(gallerySearch.toLowerCase()) ||
      w.tag.toLowerCase().includes(gallerySearch.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="owner-modal-title"
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl text-fg max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hidden File Input for Replacing Existing Photos */}
        <input
          ref={replaceFileInputRef}
          type="file"
          accept="image/*"
          aria-label="Upload replacement photo"
          onChange={handleReplaceImageFileChange}
          className="hidden"
        />

        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border bg-wash/60 px-5 sm:px-6 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-fg">
              {authed ? <Unlock className="size-4" /> : <Lock className="size-4" />}
            </div>
            <div>
              <h2 id="owner-modal-title" className="text-base font-bold tracking-tight">Studio Owner Control Panel</h2>
              <p className="text-xs text-muted">
                {authed ? "Live Browser Dashboard · Photo Uploads & Studio Settings" : "Password-Protected Owner Verification"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {authed && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-xs text-muted hover:text-red-600 hover:bg-red-500/10 min-h-[36px]"
              >
                Lock Session
              </Button>
            )}
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-muted hover:bg-border/60 hover:text-fg transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Feedback Alert */}
        {savedNotice && (
          <div className="bg-emerald-500/15 border-b border-emerald-500/20 px-6 py-2.5 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 animate-in fade-in">
            <Check className="size-4" />
            <span>{savedNotice}</span>
          </div>
        )}

        {/* Loading overlay for image compression */}
        {isCompressing && (
          <div className="bg-accent/10 border-b border-accent/20 px-6 py-2 flex items-center gap-2 text-xs font-semibold text-accent animate-pulse">
            <RefreshCw className="size-3.5 animate-spin" />
            <span>Compressing image in high resolution for instant browser speed...</span>
          </div>
        )}

        {/* Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          {!authed ? (
            /* PIN / Password Entry Screen */
            <div className="mx-auto max-w-sm py-8 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Lock className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">Enter Owner Passcode</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                Enter your private shop passcode to upload photos, change gallery images, edit contact info, and manage live announcements.
              </p>

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <input
                    type="password"
                    autoFocus
                    placeholder="Enter passcode (e.g. 948255)"
                    aria-label="Enter owner passcode"
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError(false);
                    }}
                    className={`w-full text-center text-xl font-mono tracking-widest px-4 py-3 rounded-xl border bg-bg text-fg focus:outline-none focus:ring-2 ${
                      pinError
                        ? "border-red-500 focus:ring-red-400 bg-red-500/5 animate-pulse"
                        : "border-border focus:ring-accent"
                    }`}
                  />
                  {pinError && (
                    <p className="mt-1.5 flex items-center justify-center gap-1 text-xs font-medium text-red-600">
                      <AlertCircle className="size-3.5" /> Incorrect passcode. Hint: Use 948255 or dimensions9482
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full min-h-[44px]">
                  Unlock Studio Dashboard
                </Button>

                <p className="text-[11px] text-muted/80 pt-2">
                  🔒 Built-in security: Default passcode is set to <span className="font-mono font-semibold text-fg">948255</span> or <span className="font-mono font-semibold text-fg">dimensions9482</span>. You can change this anytime inside.
                </p>
              </form>
            </div>
          ) : (
            /* Authenticated Owner Dashboard */
            <div>
              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-1.5 border-b border-border pb-3 mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                    activeTab === "gallery"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <ImageIcon className="size-3.5" /> Gallery & Photos ({effectiveWorks.length})
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                    activeTab === "contact"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Phone className="size-3.5" /> Contact & Store
                </button>
                <button
                  onClick={() => setActiveTab("banner")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                    activeTab === "banner"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Megaphone className="size-3.5" /> Notice Banner
                </button>
                <button
                  onClick={() => setActiveTab("substrates")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                    activeTab === "substrates"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Layers className="size-3.5" /> 28 Substrates
                </button>
                <button
                  onClick={() => setActiveTab("quoter")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                    activeTab === "quoter"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Calculator className="size-3.5" /> WhatsApp Quoter
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                    activeTab === "security"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <ShieldCheck className="size-3.5" /> Security & PIN
                </button>
              </div>

              {/* TAB 0: GALLERY & PHOTOS MANAGER (THE NEW CORE REQUEST) */}
              {activeTab === "gallery" && (
                <div className="space-y-6">
                  {/* Top Summary & Action Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-wash/50 p-4">
                    <div>
                      <h3 className="text-sm font-bold text-fg flex items-center gap-2">
                        <ImageIcon className="size-4 text-accent" />
                        Live Portfolio & Gallery Manager
                      </h3>
                      <p className="text-xs text-muted mt-0.5">
                        Add new photos or click <strong>&quot;Change Photo&quot;</strong> on any project to replace it. All updates sync instantly to the live website.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="text-xs min-h-[36px]"
                      >
                        {showAddForm ? (
                          <>
                            <X className="size-3.5 mr-1" /> Close Form
                          </>
                        ) : (
                          <>
                            <Plus className="size-3.5 mr-1" /> Add New Project Photo
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Add New Work Form */}
                  {showAddForm && (
                    <form onSubmit={handleCreateNewWork} className="rounded-xl border-2 border-accent/40 bg-surface p-4 sm:p-5 shadow-sm space-y-4 animate-in fade-in">
                      <div className="flex items-center justify-between border-b border-border pb-2.5">
                        <h4 className="text-sm font-bold text-fg flex items-center gap-1.5">
                          <Plus className="size-4 text-accent" /> Add New Project to Portfolio
                        </h4>
                        <span className="text-[11px] text-accent font-semibold">Instant In-Browser Compression</span>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-12">
                        {/* Image Uploader & Preview */}
                        <div className="sm:col-span-5 flex flex-col gap-2">
                          <label className="text-xs font-bold text-fg">Project Photo</label>
                          <div className="relative aspect-4/3 w-full rounded-xl border border-border overflow-hidden bg-wash flex flex-col items-center justify-center">
                            {newImagePreview ? (
                              <img
                                src={newImagePreview}
                                alt="New project preview"
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="text-center p-4">
                                <Camera className="size-8 mx-auto text-muted" />
                                <p className="text-xs text-muted mt-2">No photo selected</p>
                              </div>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <input
                              ref={addFileInputRef}
                              type="file"
                              accept="image/*"
                              aria-label="Upload photo from phone or computer"
                              onChange={handleAddNewImageUpload}
                              className="hidden"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="flex-1 text-xs min-h-[36px]"
                              onClick={() => addFileInputRef.current?.click()}
                            >
                              <Upload className="size-3.5 mr-1.5" /> Upload from Phone/PC
                            </Button>
                          </div>

                          {/* Quick Preset Selector */}
                          <div>
                            <label className="text-[11px] text-muted block mb-1">Or choose from Studio Presets:</label>
                            <select
                              aria-label="Select from studio preset photos"
                              className="w-full text-xs rounded-lg border border-border bg-bg px-2.5 py-1.5 text-fg"
                              onChange={(e) => {
                                const preset = STUDIO_PHOTO_PRESETS.find((p) => p.path === e.target.value);
                                if (preset) {
                                  setNewImagePreview(preset.path);
                                  setNewTitle(preset.label);
                                  setNewSubstrate(preset.material);
                                  setNewCategory(preset.category as any);
                                  setNewTag(preset.material);
                                }
                              }}
                            >
                              <option value="">-- Choose Authentic Workshop Photo --</option>
                              {STUDIO_PHOTO_PRESETS.map((p) => (
                                <option key={p.path} value={p.path}>
                                  {p.label} ({p.material})
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Project Details Fields */}
                        <div className="sm:col-span-7 space-y-3">
                          <div>
                            <label className="block text-xs font-bold text-fg mb-1">Project Title</label>
                            <input
                              type="text"
                              placeholder="e.g. Sacred WPC Balaji Door Panel"
                              value={newTitle}
                              onChange={(e) => setNewTitle(e.target.value)}
                              className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                              required
                            />
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                              <label className="block text-xs font-bold text-fg mb-1">Substrate Surface</label>
                              <select
                                value={newSubstrate}
                                onChange={(e) => {
                                  setNewSubstrate(e.target.value);
                                  setNewMaterial(`Direct UV on ${e.target.value}`);
                                  setNewTag(e.target.value);
                                }}
                                className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                              >
                                {allFlatSurfaces.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-fg mb-1">Category</label>
                              <select
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value as any)}
                                className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                              >
                                {GALLERY_CATEGORIES.map((c) => (
                                  <option key={c} value={c}>{c}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-fg mb-1">Material / Print Method Note</label>
                            <input
                              type="text"
                              placeholder="e.g. Direct UV on Waterproof WPC Board with Gold Inlay"
                              value={newMaterial}
                              onChange={(e) => setNewMaterial(e.target.value)}
                              className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                            />
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                              <label className="block text-xs font-bold text-fg mb-1">Location / Client Area</label>
                              <input
                                type="text"
                                placeholder="e.g. Villa Residence, RR Nagar"
                                value={newArea}
                                onChange={(e) => setNewArea(e.target.value)}
                                className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-fg mb-1">Tag / Badge</label>
                              <input
                                type="text"
                                placeholder="e.g. WPC Door"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                              />
                            </div>
                          </div>

                          <div className="pt-1 flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-fg">
                              <input
                                type="checkbox"
                                checked={newFeatured}
                                onChange={(e) => setNewFeatured(e.target.checked)}
                                className="rounded text-accent focus:ring-accent size-4"
                              />
                              <span>Feature in Top 6 Showcase on Homepage</span>
                            </label>

                            <div className="flex gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => setShowAddForm(false)}
                                className="text-xs"
                              >
                                Cancel
                              </Button>
                              <Button type="submit" size="sm" className="text-xs">
                                Add to Live Gallery
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* Inline Editing Form */}
                  {editingItem && (
                    <form onSubmit={handleSaveEditItem} className="rounded-xl border-2 border-emerald-500/40 bg-surface p-4 sm:p-5 shadow-sm space-y-4 animate-in fade-in">
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <h4 className="text-sm font-bold text-fg flex items-center gap-1.5">
                          <Edit2 className="size-4 text-emerald-500" /> Edit Details: {editingItem.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => setEditingItem(null)}
                          className="text-xs text-muted hover:text-fg"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-fg mb-1">Title</label>
                          <input
                            type="text"
                            value={editingItem.title}
                            onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                            className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-fg mb-1">Material / Print Method</label>
                          <input
                            type="text"
                            value={editingItem.material}
                            onChange={(e) => setEditingItem({ ...editingItem, material: e.target.value })}
                            className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        <div>
                          <label className="block text-xs font-bold text-fg mb-1">Category</label>
                          <select
                            value={editingItem.category}
                            onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                            className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                          >
                            {GALLERY_CATEGORIES.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-fg mb-1">Location Note</label>
                          <input
                            type="text"
                            value={editingItem.area}
                            onChange={(e) => setEditingItem({ ...editingItem, area: e.target.value })}
                            className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-fg mb-1">Tag</label>
                          <input
                            type="text"
                            value={editingItem.tag}
                            onChange={(e) => setEditingItem({ ...editingItem, tag: e.target.value })}
                            className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <Button type="button" variant="outline" size="sm" onClick={() => setEditingItem(null)}>
                          Cancel
                        </Button>
                        <Button type="submit" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  )}

                  {/* Search and Category Filters */}
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                    <div className="relative flex-1">
                      <Search className="size-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search gallery by title, substrate, or tag..."
                        value={gallerySearch}
                        onChange={(e) => setGallerySearch(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg pl-9 pr-3 py-2 text-xs text-fg focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
                      {["All", ...GALLERY_CATEGORIES].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setGalleryFilter(cat)}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                            galleryFilter === cat
                              ? "bg-accent text-accent-fg font-bold"
                              : "bg-wash text-muted hover:text-fg"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* List / Grid of Existing Gallery Items with Direct "Change Photo" */}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-h-[480px] overflow-y-auto pr-1">
                    {filteredWorks.map((work) => (
                      <div
                        key={work.id}
                        className={`rounded-xl border p-3 flex flex-col justify-between transition-all ${
                          work.hidden
                            ? "border-border/50 bg-wash/30 opacity-60"
                            : "border-border bg-surface hover:border-accent/40"
                        }`}
                      >
                        <div>
                          {/* Image & Quick Replace Button */}
                          <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-wash border border-border/80 group">
                            <img
                              src={work.image}
                              alt={work.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />

                            {/* Tag Badge */}
                            <span className="absolute top-2 left-2 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
                              {work.tag}
                            </span>

                            {/* Featured Star */}
                            {work.featured && (
                              <span className="absolute top-2 right-2 rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold text-black flex items-center gap-1 shadow-sm">
                                <Star className="size-2.5 fill-black" /> Top 6
                              </span>
                            )}

                            {/* Direct "Change Photo" Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-2 text-center">
                              <button
                                type="button"
                                onClick={() => handleReplaceImageClick(work.id)}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-accent-fg shadow-md hover:scale-105 transition-transform"
                              >
                                <Camera className="size-3.5" /> Change Photo
                              </button>
                              <span className="text-[10px] text-white/90">Pick photo from device</span>
                            </div>
                          </div>

                          {/* Info */}
                          <div className="mt-2.5">
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-accent truncate">
                              {work.category}
                            </p>
                            <h4 className="text-xs font-bold text-fg line-clamp-1 mt-0.5">
                              {work.title}
                            </h4>
                            <p className="text-[11px] text-muted line-clamp-1 mt-0.5">
                              {work.material}
                            </p>
                          </div>
                        </div>

                        {/* Action Toolbar */}
                        <div className="mt-3 pt-2 border-t border-border/70 flex items-center justify-between text-xs">
                          {/* Direct Change Photo button visible on mobile / touch */}
                          <button
                            type="button"
                            onClick={() => handleReplaceImageClick(work.id)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent hover:underline"
                            title="Replace this image with a new photo"
                          >
                            <Upload className="size-3" /> Change Photo
                          </button>

                          <div className="flex items-center gap-1">
                            {/* Toggle Feature */}
                            <button
                              type="button"
                              onClick={() => {
                                galleryHelpers.toggleFeatured(work.id);
                                showSaveFeedback(`Homepage feature ${work.featured ? "removed" : "enabled"} for "${work.title}"`);
                              }}
                              className={`p-1.5 rounded-md transition-colors ${
                                work.featured ? "text-amber-500 bg-amber-500/10" : "text-muted hover:text-fg hover:bg-wash"
                              }`}
                              title={work.featured ? "Remove from Homepage Top 6" : "Pin to Homepage Top 6"}
                            >
                              <Star className={`size-3.5 ${work.featured ? "fill-amber-500" : ""}`} />
                            </button>

                            {/* Edit Info */}
                            <button
                              type="button"
                              onClick={() => setEditingItem(work)}
                              className="p-1.5 rounded-md text-muted hover:text-fg hover:bg-wash transition-colors"
                              title="Edit text details"
                            >
                              <Edit2 className="size-3.5" />
                            </button>

                            {/* Toggle Visibility */}
                            <button
                              type="button"
                              onClick={() => {
                                galleryHelpers.toggleVisibility(work.id);
                                showSaveFeedback(`"${work.title}" is now ${work.hidden ? "VISIBLE" : "HIDDEN"}`);
                              }}
                              className={`p-1.5 rounded-md transition-colors ${
                                work.hidden ? "text-muted hover:text-fg" : "text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
                              }`}
                              title={work.hidden ? "Click to Show on Site" : "Click to Hide from Site"}
                            >
                              {work.hidden ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                            </button>

                            {/* Delete */}
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Delete "${work.title}" from your portfolio?`)) {
                                  galleryHelpers.deleteWork(work.id);
                                  showSaveFeedback(`"${work.title}" deleted.`);
                                }
                              }}
                              className="p-1.5 rounded-md text-muted hover:text-red-600 hover:bg-red-500/10 transition-colors"
                              title="Delete project"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredWorks.length === 0 && (
                    <div className="text-center py-8 border rounded-xl border-dashed border-border p-6 text-muted">
                      <ImageIcon className="size-8 mx-auto opacity-40 mb-2" />
                      <p className="text-xs font-semibold">No projects matching your search filter.</p>
                      <button
                        onClick={() => {
                          setGalleryFilter("All");
                          setGallerySearch("");
                        }}
                        className="mt-2 text-xs text-accent underline"
                      >
                        Clear filters
                      </button>
                    </div>
                  )}

                  {/* Reset to Factory Original Photos */}
                  <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
                    <span>
                      Total {effectiveWorks.length} projects in portfolio · {effectiveWorks.filter((w) => w.featured).length} featured on homepage
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm("Reset all gallery photos back to original 27 studio showroom defaults? Custom uploaded photos will be cleared.")) {
                          galleryHelpers.resetToDefaults();
                          showSaveFeedback("Restored original 27 studio showcase photos.");
                        }
                      }}
                      className="text-xs text-muted hover:text-fg"
                    >
                      <RefreshCw className="size-3 mr-1" /> Reset to Original 27 Studio Photos
                    </Button>
                  </div>
                </div>
              )}

              {/* TAB 1: CONTACT DETAILS */}
              {activeTab === "contact" && (
                <form onSubmit={handleSaveContact} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-fg mb-1">
                        Office Phone Line (Calls Only)
                      </label>
                      <input
                        type="text"
                        value={officePhone}
                        onChange={(e) => setOfficePhone(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                      />
                      <span className="text-[11px] text-muted">Current: +91 94825 58936</span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-fg mb-1">
                        WhatsApp Number (Quotes & Proofs)
                      </label>
                      <input
                        type="text"
                        value={whatsappPhone}
                        onChange={(e) => setWhatsappPhone(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                      />
                      <span className="text-[11px] text-muted">Current: +91 93432 22266</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-fg mb-1">
                      Studio Physical Address
                    </label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-fg mb-1">
                      Operating Timings Note
                    </label>
                    <input
                      type="text"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit">Save Contact Settings</Button>
                  </div>
                </form>
              )}

              {/* TAB 2: NOTICE & HOLIDAY BANNER */}
              {activeTab === "banner" && (
                <form onSubmit={handleSaveBanner} className="space-y-4">
                  <div className="flex items-center justify-between rounded-xl border border-border bg-wash/50 p-4">
                    <div>
                      <h4 className="text-sm font-bold text-fg">Top Announcement Banner</h4>
                      <p className="text-xs text-muted">Show a prominent alert at the very top of every website page.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        aria-label="Toggle announcement banner"
                        checked={bannerEnabled}
                        onChange={(e) => setBannerEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-fg mb-1">
                      Banner Announcement Message
                    </label>
                    <textarea
                      rows={3}
                      value={bannerText}
                      onChange={(e) => setBannerText(e.target.value)}
                      placeholder="e.g. Festival notice: We are open on Sunday for urgent project orders. Contact +91 93432 22266."
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-fg mb-1">
                      Banner Style / Urgency
                    </label>
                    <select
                      value={bannerType}
                      onChange={(e) => setBannerType(e.target.value as any)}
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                    >
                      <option value="info">Standard Teal (General Info)</option>
                      <option value="holiday">Warm Amber (Holiday / Event Notice)</option>
                      <option value="rush">Emerald Green (Offers / Rapid Delivery)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button type="submit">Update Banner Status</Button>
                  </div>
                </form>
              )}

              {/* TAB 3: 28 SUBSTRATES CATALOG MANAGER */}
              {activeTab === "substrates" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <input
                      type="text"
                      placeholder="Search substrate (e.g. WPC, Acrylic, Glass)..."
                      aria-label="Search substrates by name"
                      value={substrateSearch}
                      onChange={(e) => setSubstrateSearch(e.target.value)}
                      className="flex-1 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg focus:ring-1 focus:ring-accent"
                    />
                    <span className="text-xs font-semibold text-muted whitespace-nowrap">
                      {allFlatSurfaces.length - config.hiddenSubstrates.length} / {allFlatSurfaces.length} Visible
                    </span>
                  </div>

                  <div className="grid gap-2 max-h-96 overflow-y-auto pr-1">
                    {allFlatSurfaces
                      .filter((s) => s.toLowerCase().includes(substrateSearch.toLowerCase()))
                      .map((subName) => {
                        const isHidden = config.hiddenSubstrates.includes(subName);
                        return (
                          <div
                            key={subName}
                            className={`flex items-center justify-between rounded-lg border px-3 py-2.5 transition-colors ${
                              isHidden
                                ? "border-border/50 bg-wash/30 opacity-60"
                                : "border-border bg-surface"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {isHidden ? (
                                <EyeOff className="size-4 text-muted" />
                              ) : (
                                <Eye className="size-4 text-emerald-600 dark:text-emerald-400" />
                              )}
                              <span className="text-sm font-semibold text-fg">{subName}</span>
                            </div>

                            <button
                              onClick={() => handleToggleSubstrate(subName)}
                              className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                                isHidden
                                  ? "bg-wash text-muted hover:bg-emerald-500/20 hover:text-emerald-700"
                                  : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 hover:bg-red-500/20 hover:text-red-700"
                              }`}
                            >
                              {isHidden ? "Hidden (Click to Show)" : "Active (Click to Hide)"}
                            </button>
                          </div>
                        );
                      })}
                  </div>

                  {config.hiddenSubstrates.length > 0 && (
                    <div className="pt-2 flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => saveOwnerConfig({ hiddenSubstrates: [] })}
                        className="text-xs"
                      >
                        Reset All 28 Substrates to Visible
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: WHATSAPP QUOTER */}
              {activeTab === "quoter" && (
                <div className="space-y-4">
                  <p className="text-xs text-muted">
                    Quickly construct a professional quotation message with your shop specs and trigger WhatsApp in one tap.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-fg mb-1">Customer Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Anand Kumar / SOBHA Architects"
                        value={quoteClient}
                        onChange={(e) => setQuoteClient(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-fg mb-1">Select Substrate</label>
                      <select
                        value={quoteSubstrate}
                        onChange={(e) => setQuoteSubstrate(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                      >
                        {allFlatSurfaces.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-fg mb-1">Dimensions / Size</label>
                      <input
                        type="text"
                        placeholder="e.g. 4ft x 8ft or 1200 x 2400 mm"
                        value={quoteDims}
                        onChange={(e) => setQuoteDims(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-fg mb-1">Quantity</label>
                      <input
                        type="text"
                        placeholder="e.g. 4 panels"
                        value={quoteQty}
                        onChange={(e) => setQuoteQty(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-fg mb-1">Special Job Notes / Instructions</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Reverse printing with opaque white ink backing, 5mm toughened float glass"
                      value={quoteNotes}
                      onChange={(e) => setQuoteNotes(e.target.value)}
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                    />
                  </div>

                  <div className="pt-2">
                    <Button onClick={handleGenerateQuoteWhatsApp} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      <MessageSquare className="size-4 mr-2" />
                      Open Quote on WhatsApp (+91 93432 22266)
                    </Button>
                  </div>
                </div>
              )}

              {/* TAB 5: SECURITY & PASSCODE */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <form onSubmit={handleSaveNewPin} className="space-y-4 rounded-xl border border-border bg-wash/40 p-4">
                    <h4 className="text-sm font-bold text-fg">Change Owner Passcode</h4>
                    <p className="text-xs text-muted">
                      Set a custom 4-to-8 digit PIN or password for unlocking this studio portal.
                    </p>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter new PIN / password"
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg"
                      />
                    </div>
                    <Button type="submit" size="sm">Update Passcode</Button>
                  </form>

                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-3">
                    <h4 className="text-sm font-bold text-red-700 dark:text-red-400">Factory Reset</h4>
                    <p className="text-xs text-muted">
                      Reset all contact details, banner toggles, hidden substrate filters, and gallery works back to original shop defaults.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm("Reset all settings and portfolio photos to original factory defaults?")) {
                          resetOwnerConfig();
                          showSaveFeedback("Factory defaults restored.");
                        }
                      }}
                      className="text-xs text-red-600 border-red-500/30 hover:bg-red-500/10"
                    >
                      <RefreshCw className="size-3.5 mr-1.5" /> Restore Original Defaults
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-border bg-wash/40 px-6 py-3 flex items-center justify-between text-[11px] text-muted">
          <span>Design Dimensions · #8/2 A, 18th Main Road, 1st Stage, Dwarakanagar, Channasandra, Bangalore - 560098</span>
          <span className="font-mono">Office: +91 94825 58936</span>
        </div>
      </div>
    </div>
  );
}
