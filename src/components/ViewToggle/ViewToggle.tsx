import type { IViewToggleProps, TViewToggle } from "../../types/types";
import styles from "./ViewToggle.module.scss";

export const ViewToggle = ({ view, onChange }: IViewToggleProps) => {
  const cn = (base: string, active?: boolean) =>
    `${styles[base]} ${active ? styles[`${base}--active`] : ""}`;

  const views: { type: "list" | "grid"; label: string }[] = [
    { type: "list", label: "List" },
    { type: "grid", label: "Tiles" },
  ];

  const handleClick = (type: TViewToggle) => {
    if (type !== view) {
      onChange(type);
    }
  };

  return (
    <div className={styles["view-toggle"]}>
      {views.map(({ type, label }) => (
        <button
          key={type}
          className={cn("view-toggle__button", view === type)}
          onClick={() => handleClick(type)}
          aria-label={`Switch to ${label} view`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
