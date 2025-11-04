function ListExample() {

    const users = [
    { id: 1, name: "Ali", role: "Frontend Developer" },
    { id: 2, name: "Rizwan", role: "Backend Developer" },
    { id: 3, name: "Ahmed", role: "Full Stack Developer" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListExample;