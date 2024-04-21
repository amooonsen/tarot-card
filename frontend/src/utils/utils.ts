/**
 * 지정된 지연 시간 후에만 함수 실행을 허용하여 디바운스 처리를 수행하는 함수입니다.
 * 이는 창 크기 변경과 같은 빈번한 이벤트에서 함수가 반복 호출되는 것을 방지할 수 있습니다.
 *
 * @param func - 디바운스 처리할 함수.
 * @param delay - 마지막 호출 후 함수가 실행되기 전까지의 지연 시간(밀리초 단위).
 * @returns 디바운스 처리된 함수 버전으로, 실행을 지연시킵니다.
 *
 * @typeparam T - 함수의 타입을 캡처합니다. 이 타입은 임의의 수의 인자를 받고 임의의 타입을 반환할 수 있습니다.
 */
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...funcArgs: Parameters<T>) => void {
  let inDebounce: ReturnType<typeof setTimeout> | null = null;
  return function(this: ThisParameterType<T>, ...funcArgs: Parameters<T>): void {
    if (inDebounce !== null) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func.apply(this, funcArgs), delay);
  };
}
