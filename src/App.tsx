import { useEffect, useState } from "react";
import { SearchList } from "./components/SearchUsers";
import { UsersList } from "./components/UsersList";
import type { Users } from "./types";

import "./App.css";
import { Loader } from "./components/Loader";

export const App = () => {
  const [users, setUsers] = useState<Users>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch("/users.json");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Ошибка при загрузке пользователей:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  //Фильтрация пользователей критериям поиска
  const filteredUsers = users.filter(
    (user) =>
      user.firstname.toLowerCase().includes(search.toLowerCase()) ||
      user.lastname.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <SearchList value={search} onChange={(value) => setSearch(value)} />
      <div className="users-load">
        {" "}
        {loading ? <Loader /> : <UsersList users={filteredUsers} />}
      </div>
    </div>
  );
};
