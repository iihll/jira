import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

export const clearObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 在 value 变化时设置定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    // 每次在上一个 useEffect 处理完以后再执行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
