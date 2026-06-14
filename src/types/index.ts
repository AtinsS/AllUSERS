export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  createdAt: string;
}

export type Users = User[];
