"use client";

import { useEffect } from "react";

type Props = {
  sources: string[];
  excludeFirstN?: number; // skip above-the-fold clips if you like
};

/**
 * Pre-warms videos during idle time by creating off-DOM <video> tags that load
 * and cache the media. Keeps scroll silky, while fullscreen starts instantly.
 */
export default function VideoWarmup({ sources, excludeFirstN = 0 }: Props) {
  useEffect(() => {
    const urls = sources.slice(excludeFirstN);
    let cancelled = false;

    const loadOne = (url: string) =>
      new Promise<void>((resolve) => {
        const v = document.createElement("video");
        v.preload = "auto";
        v.src = url;
        v.onloadeddata = () => {
          v.src = "";
          resolve();
        };
        v.onerror = () => {
          v.src = "";
          resolve();
        };
        try {
          v.load();
        } catch {}
      });

    const queue = async () => {
      for (const url of urls) {
        if (cancelled) break;
        await loadOne(url);
      }
    };

    const idle =
      // @ts-ignore
      window.requestIdleCallback ||
      ((cb: Function) => setTimeout(cb as any, 800));

    idle(() => queue());
    return () => {
      cancelled = true;
    };
  }, [sources, excludeFirstN]);

  return null;
}
