export interface IUser {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  email?: string;
  phone?: string;
}

export interface IUserProps {
  user: IUser;
  viewType: TViewToggle;
}

export type ContactType = "mailto" | "tel";

export interface IRenderContactProps {
  value?: string;
  href: ContactType;
  className: string;
  emptyText: string;
}

export type TViewToggle = "list" | "grid";

export interface IViewToggleProps {
  view: TViewToggle;
  onChange: (view: TViewToggle) => void;
}
