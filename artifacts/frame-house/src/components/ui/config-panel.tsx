import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONFIGURATIONS, CONFIG_KEYS, type ConfigKey } from "@/data/configurations";

const CATEGORY_ICONS: Record<string, string> = {
  "Каркас": "🪵",
  "Утепление": "🧱",
  "Окна": "🪟",
  "Двери": "🚪",
  "Инженерия": "⚡",
  "Закладная электрика": "🔌",
  "Сантехника": "🚿",
  "Внутренняя отделка": "🎨",
  "Внешняя отделка": "🏠",
};

interface ConfigTabsProps {
  activeConfig: ConfigKey;
  onSelect: (key: ConfigKey) => void;
  pricePerProject?: Partial<Record<ConfigKey, string>>;
  compact?: boolean;
}

export function ConfigTabs({ activeConfig, onSelect, pricePerProject, compact }: ConfigTabsProps) {
  return (
    <div className={cn("flex rounded-2xl overflow-hidden border border-border/60 bg-muted/30", compact ? "gap-0" : "flex-col md:flex-row gap-0")}>
      {CONFIG_KEYS.map((key, index) => {
        const cfg = CONFIGURATIONS[key];
        const isActive = activeConfig === key;
        const borderStyle = compact
          ? index < CONFIG_KEYS.length - 1 ? "border-r border-border/60" : ""
          : index < CONFIG_KEYS.length - 1 ? "border-b md:border-b-0 md:border-r border-border/60" : "";

        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={cn(
              "flex-1 px-5 py-4 text-left transition-all duration-200 relative",
              borderStyle,
              isActive
                ? "bg-white shadow-sm"
                : "hover:bg-white/60 text-muted-foreground"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  )}
                  <span className={cn("font-bold text-base", isActive ? "text-foreground" : "text-foreground/70")}>
                    {cfg.title}
                  </span>
                </div>
                <p className={cn("text-xs leading-snug", isActive ? "text-muted-foreground" : "text-muted-foreground/70")}>
                  {cfg.subtitle}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <span className={cn("text-sm font-bold", isActive ? cfg.color : "text-foreground/60")}>
                {cfg.price}
              </span>
              {pricePerProject?.[key] && (
                <div className="text-xs text-primary font-semibold mt-0.5">
                  {pricePerProject[key]} — за проект
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

interface ConfigFeaturesProps {
  activeConfig: ConfigKey;
  projectArea?: string;
  showOrderButton?: boolean;
}

export function ConfigFeatures({ activeConfig, projectArea }: ConfigFeaturesProps) {
  const cfg = CONFIGURATIONS[activeConfig];

  const priceLabel = projectArea
    ? `${(Number(projectArea) * (activeConfig === "econom" ? 40000 : activeConfig === "optimum" ? 50000 : 60000)).toLocaleString("ru-RU")} ₽`
    : null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeConfig}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        {/* Header row */}
        <div className={cn(
          "flex items-center justify-between px-5 py-4 rounded-t-2xl border border-b-0",
          activeConfig === "econom" ? "bg-green-50 border-green-100" :
          activeConfig === "optimum" ? "bg-orange-50 border-orange-100" :
          "bg-amber-50 border-amber-100"
        )}>
          <div>
            <span className="font-bold text-base">Комплектация «{cfg.title}»</span>
            <p className="text-sm text-muted-foreground mt-0.5">{cfg.priceNote}</p>
          </div>
          <div className="text-right">
            <div className={cn("text-xl font-bold", cfg.color)}>{cfg.price}</div>
            {priceLabel && (
              <div className="text-xs text-muted-foreground mt-0.5">≈ {priceLabel} за {projectArea} м²</div>
            )}
          </div>
        </div>

        {/* Feature table */}
        <div className={cn(
          "border border-t-0 rounded-b-2xl overflow-hidden",
          activeConfig === "econom" ? "border-green-100" :
          activeConfig === "optimum" ? "border-orange-100" :
          "border-amber-100"
        )}>
          {cfg.features.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                "grid grid-cols-[auto_1fr] items-start gap-4 px-5 py-3.5",
                idx % 2 === 0 ? "bg-white" : "bg-muted/20",
                idx < cfg.features.length - 1 ? "border-b border-border/30" : ""
              )}
            >
              {/* Label column */}
              <div className="flex items-center gap-2 min-w-[160px] max-w-[200px]">
                <span className="text-base leading-none">{CATEGORY_ICONS[feature.name] ?? "•"}</span>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">{feature.name}</span>
              </div>
              {/* Value column */}
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-4 px-5 py-4 bg-amber-50 rounded-2xl flex items-start gap-3 border border-amber-100">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            Комплектации — базовые ориентиры. По желанию можно комбинировать элементы из разных пакетов. Итоговая смета формируется индивидуально.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
