import type { User } from "../../types";
import "./UsersCard.css";

export const UsersCard = ({
  firstname,
  lastname,
  email,
  avatar,
  role,
  createdAt,
}: User) => {
  return (
    <div className="card">
      <img className="img" src={avatar} alt={firstname} />
      <div className="card-body">
        <div className="card-title">
          <span className="card-name">{firstname}</span>
          <span className="card-surname">{lastname}</span>
        </div>
        <a className="card-email" href="#">
          {email}
        </a>
        <span className="card-role">{role}</span>
      </div>
      <span className="card-date">{createdAt}</span>
    </div>
  );
};
