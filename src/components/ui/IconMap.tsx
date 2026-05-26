"use client";

import {
  BarChart3,
  Bot,
  Brain,
  Building2,
  Cloud,
  Code2,
  Github,
  Instagram,
  Layers,
  Linkedin,
  Megaphone,
  MessageSquare,
  Palette,
  Server,
  Share2,
  Smartphone,
  Sparkles,
  TrendingUp,
  Twitter,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Code2,
  Cloud,
  Share2,
  Palette,
  Bot,
  Smartphone,
  Server,
  Sparkles,
  Layers,
  TrendingUp,
  Megaphone,
  Zap,
  Workflow,
  MessageSquare,
  Building2,
  BarChart3,
  Linkedin,
  Twitter,
  Instagram,
  Github,
};

export function DynamicIcon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} size={size} />;
}
