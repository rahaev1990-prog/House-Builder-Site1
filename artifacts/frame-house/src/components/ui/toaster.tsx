import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-card text-foreground border border-border shadow-xl rounded-xl p-4 flex gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-bold text-sm">{toast.title}</h4>
              {toast.description && (
                <p className="text-sm text-muted-foreground mt-1">{toast.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
