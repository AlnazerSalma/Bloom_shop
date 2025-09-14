import { useEffect, useState } from "react";

//hook to get the number of items in a localStorage and update it 

export const useLocalStorageCount = (key: string) => {
  const [count, setCount] = useState<number>(0);

  const updateCount = () => {
    const stored = localStorage.getItem(key);
    setCount(stored ? JSON.parse(stored).length : 0);
  };

  useEffect(() => {
    updateCount();

    window.addEventListener("storage", updateCount);
    window.addEventListener("localStorageUpdated", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("localStorageUpdated", updateCount);
    };
  }, [key]);

  return count;
};
