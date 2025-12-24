import { useState, useEffect } from "react";
import { createUser, updateUser } from "../services/userService";

const UserForm = ({ selectedUser, refreshUsers }) => {
  const [user, setUser] = useState({ name: "", email: "", age: "" });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.id) {
      await updateUser(user.id, user);
    } else {
      await createUser(user);
    }
    setUser({ name: "", email: "", age: "" });
    refreshUsers();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />
      <input name="age" placeholder="Age" value={user.age} onChange={handleChange} />
      <button type="submit">{user.id ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
