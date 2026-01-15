import type { IUserProps, IRenderContactProps } from "../../types/types";
import { cnWithView } from "../../utils/classname";
import styles from "./UserItem.module.scss";

export const UserItem = ({ user, viewType }: IUserProps) => {
  const cn = cnWithView(styles, viewType);

  const fullName = [user.lastName, user.firstName, user.middleName]
    .filter(Boolean)
    .join(" ");

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

  return (
    <article className={cn("user-item")}>
      <p
        className={cn("user-item__name")}
        tabIndex={0}
        aria-label={fullName || "Имя не указано"}
      >
        {fullName || "Имя не указано"}
      </p>
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
    </article>
  );
};
