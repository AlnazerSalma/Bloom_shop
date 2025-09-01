import { useEffect } from "react";

const useDisableScrollRestoration = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
};

export default useDisableScrollRestoration;
