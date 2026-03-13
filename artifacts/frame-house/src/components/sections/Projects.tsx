import { motion } from "framer-motion";
import { Maximize2, BedDouble, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    name: "Проект «Уют»",
    image: "project-1.png",
    area: "78",
    bedrooms: "2",
    bathrooms: "1",
    price: "от 2 850 000 ₽"
  },
  {
    name: "Проект «Комфорт»",
    image: "project-2.png",
    area: "96",
    bedrooms: "3",
    bathrooms: "1",
    price: "от 3 600 000 ₽"
  },
  {
    name: "Проект «Семейный»",
    image: "project-3.png",
    area: "120",
    bedrooms: "3",
    bathrooms: "2",
    price: "от 4 200 000 ₽"
  },
  {
    name: "Проект «Просторный»",
    image: "project-4.png",
    area: "145",
    bedrooms: "4",
    bathrooms: "2",
    price: "от 5 100 000 ₽"
  },
  {
    name: "Проект «Загородный»",
    image: "project-5.png",
    area: "168",
    bedrooms: "4",
    bathrooms: "3",
    price: "от 6 300 000 ₽"
  },
  {
    name: "Проект «Премиум»",
    image: "project-6.png",
    area: "210",
    bedrooms: "5",
    bathrooms: "3",
    price: "от 8 500 000 ₽"
  }
];

export function Projects() {
  const handleProjectClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
            <Button variant="outline" className="hidden md:flex">
              Смотреть весь каталог
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 group flex flex-col h-full hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-foreground font-bold px-3 py-1 rounded-lg shadow-sm">
                  {project.price}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 font-display">{project.name}</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl">
                    <Maximize2 className="w-5 h-5 text-primary mb-1" />
                    <span className="text-sm font-medium">{project.area} м²</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl">
                    <BedDouble className="w-5 h-5 text-primary mb-1" />
                    <span className="text-sm font-medium">{project.bedrooms}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-xl">
                    <Bath className="w-5 h-5 text-primary mb-1" />
                    <span className="text-sm font-medium">{project.bathrooms}</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-2">
                  <Button className="w-full" onClick={handleProjectClick}>
                    Хочу такой дом
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full">
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
}
