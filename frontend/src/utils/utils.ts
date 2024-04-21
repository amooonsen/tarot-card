export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...funcArgs: Parameters<T>) => void {
  let inDebounce: ReturnType<typeof setTimeout> | null = null;
  return function(this: ThisParameterType<T>, ...funcArgs: Parameters<T>): void {
    if (inDebounce !== null) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func.apply(this, funcArgs), delay);
  };
}
