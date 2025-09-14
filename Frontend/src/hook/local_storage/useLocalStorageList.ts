import { useState, useEffect } from "react";

//hook to manage items in a localStorage (add/remove/check)
export const useLocalStorageList = <T extends { id: string }>(
  storageKey: string,
  item: T
) => {
  const [exists, setExists] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const list: T[] = JSON.parse(stored);
      setExists(list.some((p) => p.id === item.id));
    }
  }, [item.id, storageKey]);

  const toggleItem = () => {
    const stored = localStorage.getItem(storageKey);
    let list: T[] = stored ? JSON.parse(stored) : [];

    if (exists) {
      list = list.filter((p) => p.id !== item.id);
    } else {
      if (!list.some((p) => p.id === item.id)) list.push(item);
    }

    localStorage.setItem(storageKey, JSON.stringify(list));
    setExists(!exists);

    // Notify any listeners
    window.dispatchEvent(new Event("localStorageUpdated"));
  };

  return { exists, toggleItem };
};
