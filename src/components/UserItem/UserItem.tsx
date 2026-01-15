import { useEffect, useState } from "react";
import type { IUserProps, IRenderContactProps } from "../../types/types";
import { cnWithView } from "../../utils/classname";
import styles from "./UserItem.module.scss";

export const UserItem = ({ user, viewType }: IUserProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 600px)").matches
  );
  const cn = cnWithView(styles, viewType);

  const fullName =
    [user.lastName, user.firstName, user.middleName]
      .filter(Boolean)
      .join(" ") || "Имя не указано";

  const renderContact = ({
    value,
    href,
    className,
    emptyText,
  }: IRenderContactProps) =>
    value ? (
      <a href={`${href}:${value}`} className={className} aria-label={value}>
        {value}
      </a>
    ) : (
      <span
        className={`${className} ${styles.empty}`}
        tabIndex={0}
        aria-label={emptyText}
      >
        {emptyText}
      </span>
    );

  useEffect(() => {
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 600px)");
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <article className={cn("user-item")}>
      <div className={cn("user-item__name")}>
        <p tabIndex={0} aria-label={fullName}>
          {fullName}
        </p>
        {isMobile && viewType === "list" && (
          <button
            className={`${styles["user-item__toggle"]} ${
              isExpanded ? styles["active"] : ""
            }`}
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-label="Переключить контактные данные"
          >
            ▼
          </button>
        )}
      </div>

      {(isExpanded || !isMobile || viewType === "grid") && (
        <>
          {renderContact({
            value: user.email,
            href: "mailto",
            className: cn("user-item__email"),
            emptyText: "Email не указан",
          })}
          {renderContact({
            value: user.phone,
            href: "tel",
            className: cn("user-item__phone"),
            emptyText: "Телефон не указан",
          })}
        </>
      )}
    </article>
  );
};
