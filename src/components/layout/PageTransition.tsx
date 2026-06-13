"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/**
 * Lightweight per-route enter animation. Keyed on pathname so each
 * navigation replays the fade/lift. Kept subtle to feel premium, not flashy.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[60vh] pt-16"
    >
      {children}
    </motion.main>
  );
}
