import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/users";
import { type User } from "../types/user";

export function UserList() {
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (isLoading) return <p>Loading data users....</p>;
  if (isError) return <p style={{ color: "red" }}>Error Loading Users </p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.name} | {user.username} | {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
