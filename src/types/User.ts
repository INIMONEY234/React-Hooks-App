export type Role = "Admin" | "Editor" | "Viewer";


export interface User {
  username: string;
  role: Role;
}; 

