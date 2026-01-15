import type { TViewToggle } from "../types/types";

// Функция для формирования классов стилей для телефона и почты
export const cnWithView = (
  styles: Record<string, string>,
  viewType: TViewToggle
) => {
  return (base: string) => `${styles[base]} ${styles[`${base}--${viewType}`]}`;
};
