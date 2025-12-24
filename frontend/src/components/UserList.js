import { deleteUser } from "../services/userService";

const UserList = ({ users, onEdit, refreshUsers }) => {
  const handleDelete = async (id) => {
    await deleteUser(id);
    refreshUsers();
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email}, {user.age})
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
