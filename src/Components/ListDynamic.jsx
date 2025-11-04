import { useState } from "react";

function ListDynamic() {

    const [users, setUsers] = useState([
    { id: 1, name: "Ali", role: "Frontend Developer" },
    { id: 2, name: "Hassan", role: "Backend Developer" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addUser = () => {
    if (name.trim() === "" || role.trim() === "") return;

    const newUser = {
      id: users.length + 1,
      name: name,
      role: role,
    };

    setUsers([...users, newUser]);
    setName("");
    setRole("");
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User List (Dynamic)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.role}
            &nbsp;
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        &nbsp;
        <input
          type="text"
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        &nbsp;
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
}

export default ListDynamic;