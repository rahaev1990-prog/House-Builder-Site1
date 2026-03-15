import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Maximize2,
  BedDouble,
  Bath,
  Layers,
  Star,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { CONFIGURATIONS, type ConfigKey } from "@/data/configurations";
import { ConfigTabs, ConfigFeatures } from "@/components/ui/config-panel";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === params.id);
  const [activePhoto, setActivePhoto] = useState(0);
  const [activeConfig, setActiveConfig] = useState<ConfigKey>("optimum");

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Проект не найден</h1>
        <Link href="/">
          <Button>На главную</Button>
        </Link>
      </div>
    );
  }

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  const configPriceMap: Partial<Record<ConfigKey, string>> = {
    econom: `от ${(Number(project.area) * 40000).toLocaleString("ru-RU")} ₽`,
    optimum: `от ${(Number(project.area) * 50000).toLocaleString("ru-RU")} ₽`,
    maximum: `от ${(Number(project.area) * 60000).toLocaleString("ru-RU")} ₽`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#projects" className="hover:text-primary transition-colors">
              Проекты
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{project.name}</span>
          </motion.div>

          {/* Hero: Gallery + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 md:mb-16">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.gallery[activePhoto]}`}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-foreground font-bold text-lg px-4 py-2 rounded-xl shadow">
                  {configPriceMap[activeConfig]}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all duration-200 ${
                      activePhoto === i
                        ? "border-primary shadow-md scale-95"
                        : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/${img}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  {project.style}
                </span>
                <span className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full">
                  {project.floors} {project.floors === "1" ? "этаж" : "этажа"}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                {project.name}
              </h1>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-2xl">
                  <Maximize2 className="w-6 h-6 text-primary mb-2" />
                  <span className="text-2xl font-bold">{project.area}</span>
                  <span className="text-xs text-muted-foreground">м²</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-2xl">
                  <BedDouble className="w-6 h-6 text-primary mb-2" />
                  <span className="text-2xl font-bold">{project.bedrooms}</span>
                  <span className="text-xs text-muted-foreground">
                    {Number(project.bedrooms) === 1
                      ? "спальня"
                      : Number(project.bedrooms) < 5
                      ? "спальни"
                      : "спален"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-2xl">
                  <Bath className="w-6 h-6 text-primary mb-2" />
                  <span className="text-2xl font-bold">{project.bathrooms}</span>
                  <span className="text-xs text-muted-foreground">
                    {Number(project.bathrooms) === 1
                      ? "санузел"
                      : Number(project.bathrooms) < 5
                      ? "санузла"
                      : "санузлов"}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-base mb-3">Особенности проекта</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a href="/#contact" className="flex-1">
                  <Button size="lg" className="w-full">
                    Хочу такой дом
                  </Button>
                </a>
                <a href="/#contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full">
                    Получить расчёт
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Configuration Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Выберите <span className="text-primary">комплектацию</span>
              </h2>
              <p className="text-muted-foreground">
                Характеристики и стоимость обновляются автоматически
              </p>
            </div>

            <div className="mb-4">
              <ConfigTabs
                activeConfig={activeConfig}
                onSelect={setActiveConfig}
                pricePerProject={configPriceMap}
              />
            </div>

            <ConfigFeatures activeConfig={activeConfig} projectArea={project.area} />

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="/#contact" className="flex-1">
                <Button size="lg" className="w-full">
                  Заказать в комплектации «{CONFIGURATIONS[activeConfig].title}»
                </Button>
              </a>
              <a href="/#contact" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Получить точный расчёт
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Base Specs + Floor Plan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Base project specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Базовые характеристики проекта</h2>
              </div>
              <dl className="space-y-4">
                {[
                  { label: "Фундамент", value: project.specs.foundation },
                  { label: "Кровля", value: project.specs.roof },
                  { label: "Высота потолков", value: project.specs.ceiling },
                  { label: "Количество этажей", value: `${project.floors} ${project.floors === "1" ? "этаж" : "этажа"}` },
                  { label: "Площадь", value: `${project.area} м²` },
                  { label: "Спальни / санузлы", value: `${project.bedrooms} / ${project.bathrooms}` },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-3 border-b border-border/40 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-muted-foreground font-medium">{label}</dt>
                    <dd className="text-sm font-semibold sm:text-right max-w-xs">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Floor plan rooms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Площади помещений</h2>
                </div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Итого: {project.area} м²
                </span>
              </div>
              <div className="space-y-2">
                {project.floorPlan.rooms.map((room) => (
                  <div
                    key={room.name}
                    className="flex items-center justify-between py-2 border-b border-border/40 last:border-0"
                  >
                    <span className="text-sm">{room.name}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary/60 rounded-full"
                          style={{
                            width: `${Math.min(
                              (Number(room.area) / Number(project.area)) * 100 * 3,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold w-12 text-right">
                        {room.area} м²
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Other projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Другие проекты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`}>
                  <div className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}images/${p.image}`}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 text-foreground text-xs font-bold px-2 py-1 rounded-lg">
                        {p.price}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{p.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{p.area} м²</span>
                        <span>{p.bedrooms} спал.</span>
                        <span>{p.bathrooms} санузл.</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href="/#projects">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Все проекты
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
