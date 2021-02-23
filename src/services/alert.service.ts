import { toast, ToastProps } from 'react-toastify';

/**
 * A wrapper for toast.
 */
class ToastAlertFactory {
  error(message: any, options?: ToastProps) {
    toast.error(message, options);
  }

  warn(message: string, options?: ToastProps) {
    toast.warn(message, options);
  }

  info(message: string, options?: ToastProps) {
    toast.info(message, options);
  }

  success(message: string, options?: ToastProps) {
    toast.success(message, options);
  }
}

export const ToastAlert = new ToastAlertFactory();
