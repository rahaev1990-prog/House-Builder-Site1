import { motion } from "framer-motion";
import { Maximize2, BedDouble, Bath } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Наши популярные <span className="text-primary">проекты</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Продуманные планировки для комфортной жизни. Любой проект можно адаптировать под ваши требования.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="hidden md:flex">
              <Button variant="outline">Получить расчёт</Button>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 group flex flex-col h-full hover:shadow-2xl transition-all duration-300"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-64 overflow-hidden cursor-pointer">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-foreground font-bold px-3 py-1 rounded-lg shadow-sm">
                    {project.price}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-foreground font-semibold text-sm px-4 py-2 rounded-lg shadow">
                      Смотреть проект →
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/projects/${project.id}`}>
                  <h3 className="text-2xl font-bold mb-4 font-display hover:text-primary transition-colors cursor-pointer">
                    {project.name}
                  </h3>
                </Link>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl">
                    <Maximize2 className="w-5 h-5 text-primary mb-1" />
                    <span className="text-sm font-medium">{project.area} м²</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl">
                    <BedDouble className="w-5 h-5 text-primary mb-1" />
                    <span className="text-sm font-medium">
                      {project.bedrooms}{" "}
                      {Number(project.bedrooms) === 1
                        ? "спальня"
                        : Number(project.bedrooms) < 5
                        ? "спальни"
                        : "спален"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl">
                    <Bath className="w-5 h-5 text-primary mb-1" />
                    <span className="text-sm font-medium">
                      {project.bathrooms}{" "}
                      {Number(project.bathrooms) === 1
                        ? "санузел"
                        : Number(project.bathrooms) < 5
                        ? "санузла"
                        : "санузлов"}
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-2 flex gap-2">
                  <Link href={`/projects/${project.id}`} className="flex-1">
                    <Button className="w-full">Подробнее</Button>
                  </Link>
                  <a href="#contact" className="flex-1">
                    <Button variant="outline" className="w-full">Хочу такой</Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a href="#contact" className="w-full block">
            <Button variant="outline" className="w-full">Получить расчёт</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
