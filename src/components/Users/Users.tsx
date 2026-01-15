import { useState } from "react";
import type { TViewToggle } from "../../types/types";
import { ViewToggle } from "../ViewToggle/ViewToggle";
import { UserItem } from "../UserItem/UserItem";
import { users } from "../../data/data";
import styles from "./Users.module.scss";
import { cnWithView } from "../../utils/classname";

export const Users = () => {
  const [viewType, setViewType] = useState<TViewToggle>("list");
  const cn = cnWithView(styles, viewType);

  return (
    <div className={styles["users-container"]}>
      <ViewToggle view={viewType} onChange={setViewType} />
      <div className={cn("users-container__list")}>
        {users.length === 0 ? (
          <p className={styles.empty}>Нет пользователей</p>
        ) : (
          users.map((user) => (
            <UserItem key={user.id} user={user} viewType={viewType} />
          ))
        )}
      </div>
    </div>
  );
};
