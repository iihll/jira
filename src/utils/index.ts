import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const clearObject = (object: object) => {
  const result: any = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 在 value 变化时设置定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    // 每次在上一个 useEffect 处理完以后再执行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  const add = (item: T) => {
    setValue([...value, item]);
  };
  const clear = () => {
    setValue([]);
  };
  const removeIndex = (index: number) => {
    const copy = [...value];
    copy.splice(index, 1);
    setValue(copy);
  };

  return {
    value,
    setValue,
    add,
    clear,
    removeIndex,
  };
};
