export function checkDeviceCondition() {
  return window.matchMedia('(max-width: 1024px)').matches || window.matchMedia('(hover: none)').matches;
}