import { useGetUsersQuery } from "./usersApiSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isSuccess && users) {
    // Check if users data is available
    return (
      <div>
        <section className="users">
          <h1>Users List</h1>
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user.username}</li>
            ))}
          </ul>
          <Link to="/welcome">Back to Welcome</Link>
        </section>
      </div>
    );
  } else if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }
};

export default UsersList;
