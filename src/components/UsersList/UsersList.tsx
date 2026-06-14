import type { User } from "../../types";
import { UsersCard } from "../UsersCard/UsersCard";

import "./UsersList.css";

interface UserListProps {
  users: User[];
}

export const UsersList = ({ users }: UserListProps) => {
  if (users.length === 0)
    return <span className="empty">Пользователи не найдены</span>;

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li className="user-item" key={user.id}>
          <UsersCard {...user} />
        </li>
      ))}
    </ul>
  );
};
