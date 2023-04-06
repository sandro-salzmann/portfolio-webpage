import { useMediaQuery as useReactHooksMediaQuery } from "@react-hook/media-query";

// @react-hook/media-query wrapper that always returns true if used in a non-browser env
// to make components with useMediaQuery testable
export const useMediaQuery = (query: string): boolean => {
  const isBrowser = typeof window !== "undefined" && !!window.matchMedia;

  // isBrowser will never change during a session
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isBrowser ? useReactHooksMediaQuery(query) : true;
};
