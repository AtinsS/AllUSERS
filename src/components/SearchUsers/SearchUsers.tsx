import "./SearchUsers.css";

export type SearchListProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchList: React.FC<SearchListProps> = ({ value, onChange }) => {
  return (
    <input
      className="input"
      placeholder="Поиск пользователей по имени, фамилии, email или роли"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
