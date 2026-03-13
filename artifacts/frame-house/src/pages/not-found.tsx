import { Link } from "wouter";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Home className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
      <h2 className="text-2xl font-bold text-foreground mb-4">Страница не найдена</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Возможно, страница была удалена или вы ввели неверный адрес. Давайте вернемся на главную и начнем сначала.
      </p>
      <Link href="/" className="inline-block">
        <Button size="lg">На главную страницу</Button>
      </Link>
    </div>
  );
}
