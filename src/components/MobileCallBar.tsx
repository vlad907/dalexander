"use client";

import { firm } from "@/lib/site";
import { Icon } from "@/components/Icon";

/**
 * Always-reachable click-to-call bar on small screens. Keeps the primary
 * conversion action within thumb's reach without interfering with desktop.
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-wine-800 bg-wine-900/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href={firm.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-paper"
        >
          <Icon name="phone" className="h-4 w-4 text-gold-400" />
          Call now
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-paper"
        >
          <Icon name="mail" className="h-4 w-4 text-gold-400" />
          Message us
        </a>
      </div>
    </div>
  );
}
