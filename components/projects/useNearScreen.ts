import { useEffect, useState } from "react";

/** Returns true when the element is within rootMargin of the viewport */
export default function useNearScreen<T extends Element>(
  ref: React.RefObject<T>,
  rootMargin = "300px"
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);

  return inView;
}
