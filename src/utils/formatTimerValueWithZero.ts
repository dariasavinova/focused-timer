export const formatTimerValueWithZero = (value: number) => {
  return value.toString().padStart(2, '0')
}