// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines Tailwind class names while resolving conflicts
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
