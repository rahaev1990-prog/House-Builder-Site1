import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calculator, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  area: z.string().min(1, "Выберите площадь"),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);

    toast({
      title: "Заявка успешно отправлена!",
      description: "Наш менеджер свяжется с вами в течение 15 минут для консультации.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto border border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left Info Panel */}
            <div className="bg-secondary p-6 sm:p-8 lg:p-12 text-white lg:col-span-2 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Получите точный расчёт стоимости
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                  Оставьте заявку, и мы бесплатно подготовим для вас предварительную смету строительства с учетом всех пожеланий.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Звоните нам</div>
                      <a href="tel:+78005553535" className="font-bold text-base md:text-lg hover:text-primary transition-colors">+7 (800) 555-35-35</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Пишите</div>
                      <a href="mailto:info@karkaspro.ru" className="font-bold text-base md:text-lg hover:text-primary transition-colors">info@karkaspro.ru</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Наш офис</div>
                      <div className="font-bold text-sm md:text-base">Москва, ул. Строителей, 12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="p-6 sm:p-8 lg:p-12 lg:col-span-3">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Заполните форму</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Ваше имя *</label>
                    <input
                      {...register("name")}
                      placeholder="Иван Иванов"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-background border-2 focus:outline-none transition-all duration-200 text-base",
                        errors.name ? "border-destructive focus:border-destructive focus:ring-4 focus:ring-destructive/10" : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                      )}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Телефон *</label>
                    <input
                      {...register("phone")}
                      placeholder="+7 (999) 000-00-00"
                      type="tel"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-background border-2 focus:outline-none transition-all duration-200 text-base",
                        errors.phone ? "border-destructive focus:border-destructive focus:ring-4 focus:ring-destructive/10" : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                      )}
                    />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Желаемая площадь дома *</label>
                  <select
                    {...register("area")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-background border-2 focus:outline-none transition-all duration-200 appearance-none text-base",
                      errors.area ? "border-destructive focus:border-destructive focus:ring-4 focus:ring-destructive/10" : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                    )}
                  >
                    <option value="">Выберите площадь</option>
                    <option value="up-to-100">До 100 м²</option>
                    <option value="100-150">100 - 150 м²</option>
                    <option value="150-200">150 - 200 м²</option>
                    <option value="more-200">Более 200 м²</option>
                  </select>
                  {errors.area && <p className="text-xs text-destructive mt-1">{errors.area.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Комментарий или пожелания</label>
                  <textarea
                    {...register("message")}
                    placeholder="Например: есть участок в Подмосковье, планируем строить весной..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-none text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base md:text-lg"
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting ? (
                    "Отправка..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#" className="underline hover:text-primary">политикой конфиденциальности</a>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
