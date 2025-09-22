"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Set the initial state
      setMatches(mediaQueryList.matches);

      // Add the listener
      mediaQueryList.addEventListener("change", handleChange);

      // Cleanup function to remove the listener
      return () => {
        mediaQueryList.removeEventListener("change", handleChange);
      };
    }
  }, [query]);

  return matches;
}
