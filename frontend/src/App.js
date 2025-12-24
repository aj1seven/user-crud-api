import { useEffect, useState } from "react";
import { getUsers } from "./services/userService";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User CRUD App</h2>
      <UserForm selectedUser={selectedUser} refreshUsers={fetchUsers} />
      <UserList users={users} onEdit={setSelectedUser} refreshUsers={fetchUsers} />
    </div>
  );
}

export default App;
