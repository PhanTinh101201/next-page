export const setStorage = (key: string, value: string) => {
  return typeof window !== "undefined"
    ? localStorage.setItem(key, value)
    : undefined;
};

export const getStorage = (key: string) => {
  return typeof window !== "undefined"
    ? JSON.stringify(localStorage.getItem(key))
    : null;
};

export const removeStorage = (key: string) => {
  return typeof window !== "undefined"
    ? JSON.stringify(localStorage.removeItem(key))
    : null;
};
