import { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("formData")) || [];
        setUsers(savedUsers);
    }, []);

    return (
        <div className="container mt-4">
            <h2>All Registered Users</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>

                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Users;
