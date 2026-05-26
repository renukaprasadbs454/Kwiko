"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-[#00a86b] to-[#00d084] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,216,132,0.5)] transition hover:translate-y-[-2px]"
      >
        <MessageCircle size={20} />
        WhatsApp
      </Link>
    </motion.div>
  );
}
