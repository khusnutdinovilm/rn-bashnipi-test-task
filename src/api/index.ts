import { User } from "@/types/users";

const hostUrl = "https://jsonplaceholder.typicode.com";

export const api = {
  getUsers: () => fetch(`${hostUrl}/users`),
  updateUser: (updatedUser: User) => fetch(`${hostUrl}/users/`),
};
