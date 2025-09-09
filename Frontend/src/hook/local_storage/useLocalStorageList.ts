// import { useState, useEffect } from "react";

// export const useLocalStorageList = <
//   T extends { id: string; selectedSize?: string }
// >(
//   storageKey: string
// ) => {
//   const [items, setItems] = useState<T[]>([]);

//   useEffect(() => {
//     const stored = localStorage.getItem(storageKey);
//     if (stored) setItems(JSON.parse(stored));
//   }, [storageKey]);

//   const toggleItem = (item: T) => {
//     const exists = items.find(
//       (i) => i.id === item.id && i.selectedSize === item.selectedSize
//     );
//     const newItems = exists
//       ? items.filter(
//           (i) => !(i.id === item.id && i.selectedSize === item.selectedSize)
//         )
//       : [...items, item];
//     setItems(newItems);
//     localStorage.setItem(storageKey, JSON.stringify(newItems));
//   };

//   const removeItem = (id: string, selectedSize?: string) => {
//     const newItems = items.filter(
//       (i) => !(i.id === id && i.selectedSize === selectedSize)
//     );
//     setItems(newItems);
//     localStorage.setItem(storageKey, JSON.stringify(newItems));
//   };

//   const updateItem = (
//     id: string,
//     updatedFields: Partial<T>,
//     selectedSize?: string
//   ) => {
//     const newItems = items.map((item) =>
//       item.id === id && item.selectedSize === selectedSize
//         ? { ...item, ...updatedFields }
//         : item
//     );
//     setItems(newItems);
//     localStorage.setItem(storageKey, JSON.stringify(newItems));
//   };

//   return { items, toggleItem, removeItem, updateItem };
// };
import { useState, useEffect } from "react";

type BaseItem = { id: string; selectedSize?: string };

export const useLocalStorageList = <T extends BaseItem>(
  storageKey: string,
  singleItem?: T // optional, used for "exists" checks like wishlist
) => {
  const [items, setItems] = useState<T[]>([]);
  const [exists, setExists] = useState(false);

  const loadItems = () => {
    const stored = localStorage.getItem(storageKey);
    const list: T[] = stored ? JSON.parse(stored) : [];
    setItems(list);

    if (singleItem) {
      setExists(
        list.some(
          (i) =>
            i.id === singleItem.id && i.selectedSize === singleItem.selectedSize
        )
      );
    }
  };

  // Load on mount + when singleItem changes
  useEffect(() => {
    loadItems();
  }, [storageKey, singleItem?.id, singleItem?.selectedSize]);

  // 🔥 Listen for cross-component updates
  useEffect(() => {
    const handleUpdate = () => loadItems();
    window.addEventListener("localStorageUpdated", handleUpdate);
    return () =>
      window.removeEventListener("localStorageUpdated", handleUpdate);
  }, [storageKey, singleItem?.id, singleItem?.selectedSize]);

  const toggleItem = (item: T) => {
    const exists = items.find(
      (i) => i.id === item.id && i.selectedSize === item.selectedSize
    );
    const newItems = exists
      ? items.filter(
          (i) => !(i.id === item.id && i.selectedSize === item.selectedSize)
        )
      : [...items, item];

    localStorage.setItem(storageKey, JSON.stringify(newItems));
    window.dispatchEvent(new Event("localStorageUpdated"));
  };

  const removeItem = (id: string, selectedSize?: string) => {
    const newItems = items.filter(
      (i) => !(i.id === id && i.selectedSize === selectedSize)
    );
    localStorage.setItem(storageKey, JSON.stringify(newItems));
    window.dispatchEvent(new Event("localStorageUpdated"));
  };

  const updateItem = (
    id: string,
    updatedFields: Partial<T>,
    selectedSize?: string
  ) => {
    const newItems = items.map((item) =>
      item.id === id && item.selectedSize === selectedSize
        ? { ...item, ...updatedFields }
        : item
    );
    localStorage.setItem(storageKey, JSON.stringify(newItems));
    window.dispatchEvent(new Event("localStorageUpdated"));
  };

  return { items, exists, toggleItem, removeItem, updateItem };
};
