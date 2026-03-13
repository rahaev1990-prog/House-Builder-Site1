import { useState, useEffect } from "react";

// Simplified toast hook for the frontend-only application
type ToastProps = {
  title: string;
  description?: string;
  duration?: number;
};

let toastCallback: ((props: ToastProps) => void) | null = null;

export function useToast() {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);

  useEffect(() => {
    toastCallback = (props) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { ...props, id }]);
      
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, props.duration || 5000);
    };
    
    return () => {
      toastCallback = null;
    };
  }, []);

  const toast = (props: ToastProps) => {
    if (toastCallback) {
      toastCallback(props);
    }
  };

  return { toast, toasts };
}
