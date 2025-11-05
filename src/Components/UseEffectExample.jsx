import { useState, useEffect } from "react";

function UseEffectExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const fakeUsers = [
          { id: 1, name: "Ali", role: "Frontend Developer" },
          { id: 2, name: "Rizwan", role: "Backend Developer" },
          { id: 3, name: "Bilal", role: "Full Stack Developer" },
        ];

        setUsers(fakeUsers);
        setLoading(false);
      } catch {
        setError("Failed to load users");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>useEffect Example (Fetching Users)</h2>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.role}
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}

export default UseEffectExample;