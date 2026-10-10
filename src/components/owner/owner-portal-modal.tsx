import React, { useState, useEffect } from "react";
import {
  X,
  Lock,
  Unlock,
  Check,
  AlertCircle,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Layers,
  Megaphone,
  Calculator,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  useOwnerConfig,
  saveOwnerConfig,
  resetOwnerConfig,
  isOwnerAuthenticated,
  verifyOwnerPin,
  logoutOwner,
} from "@/lib/owner-store";
import { allFlatSurfaces } from "@/lib/site";

interface OwnerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OwnerPortalModal({ isOpen, onClose }: OwnerPortalModalProps) {
  const config = useOwnerConfig();
  const [authed, setAuthed] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<"contact" | "banner" | "substrates" | "quoter" | "security">("contact");
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  // Form states
  const [officePhone, setOfficePhone] = useState(config.officePhoneDisplay);
  const [whatsappPhone, setWhatsappPhone] = useState(config.whatsappDisplay);
  const [address, setAddress] = useState(config.addressExact);
  const [hours, setHours] = useState(config.hoursNote);
  const [bannerEnabled, setBannerEnabled] = useState(config.bannerEnabled);
  const [bannerText, setBannerText] = useState(config.bannerText);
  const [bannerType, setBannerType] = useState(config.bannerType);
  const [substrateSearch, setSubstrateSearch] = useState("");
  const [newPin, setNewPin] = useState("");

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
    }
  }, [isOpen, config]);

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
    setTimeout(() => setSavedNotice(null), 2500);
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
    const text = `*Design Dimensions — Official Quote Enquiry*%0A%0A` +
      `*Client:* ${quoteClient || "Walk-In / Phone Customer"}%0A` +
      `*Material:* ${quoteSubstrate}%0A` +
      `*Dimensions:* ${quoteDims}%0A` +
      `*Quantity:* ${quoteQty} unit(s)%0A` +
      (quoteNotes ? `*Notes:* ${quoteNotes}%0A` : "") +
      `%0A*Studio:* #8/2 A, 18th Main Rd, Channasandra, Bangalore - 560098%0A` +
      `*Office:* ${config.officePhoneDisplay}`;

    window.open(`https://wa.me/${rawNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl text-fg max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border bg-wash/60 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-fg">
              {authed ? <Unlock className="size-4" /> : <Lock className="size-4" />}
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight">Studio Owner Control Panel</h2>
              <p className="text-xs text-muted">
                {authed ? "Logged In · Live Browser Storage Controls" : "Password-Protected Owner Verification"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {authed && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-xs text-muted hover:text-red-600 hover:bg-red-500/10"
              >
                Lock Session
              </Button>
            )}
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-muted hover:bg-border/60 hover:text-fg transition-colors"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Feedback Alert */}
        {savedNotice && (
          <div className="bg-emerald-500/15 border-b border-emerald-500/20 px-6 py-2.5 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <Check className="size-4" />
            <span>{savedNotice}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="overflow-y-auto p-6 flex-1">
          {!authed ? (
            /* PIN / Password Entry Screen */
            <div className="mx-auto max-w-sm py-8 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Lock className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">Enter Owner Passcode</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                Enter your private shop passcode to manage contact numbers, 28 substrates, and live website announcements.
              </p>

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <input
                    type="password"
                    autoFocus
                    placeholder="Enter passcode (e.g. 948255)"
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

                <Button type="submit" className="w-full">
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
              <div className="flex flex-wrap gap-1.5 border-b border-border pb-3 mb-6">
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === "contact"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Phone className="size-3.5" /> Contact & Store
                </button>
                <button
                  onClick={() => setActiveTab("banner")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === "banner"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Megaphone className="size-3.5" /> Notice Banner
                </button>
                <button
                  onClick={() => setActiveTab("substrates")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === "substrates"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Layers className="size-3.5" /> 28 Substrates
                </button>
                <button
                  onClick={() => setActiveTab("quoter")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === "quoter"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <Calculator className="size-3.5" /> WhatsApp Quoter
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === "security"
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-wash hover:text-fg"
                  }`}
                >
                  <ShieldCheck className="size-3.5" /> Security & PIN
                </button>
              </div>

              {/* Tab 1: Contact Details */}
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

              {/* Tab 2: Notice & Holiday Banner */}
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

              {/* Tab 3: 28 Substrates Catalog Manager */}
              {activeTab === "substrates" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <input
                      type="text"
                      placeholder="Search substrate (e.g. WPC, Acrylic, Glass)..."
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

              {/* Tab 4: WhatsApp Quoter */}
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

              {/* Tab 5: Security & Passcode */}
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
                      Reset all contact details, banner toggles, and hidden substrate filters back to original shop defaults.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm("Reset all settings to original factory defaults?")) {
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
          <span>Design Dimensions · #8/2 A, 18th Main Rd, Channasandra, Bangalore 560098</span>
          <span className="font-mono">Office: 9482558936</span>
        </div>
      </div>
    </div>
  );
}
