import React, { useReducer, useState } from 'react';

const userData = [
    { id: 1, name: 'Kunal', age: 22 },
    { id: 2, name: 'Rounak', age: 23 },
    { id: 3, name: 'Utkarsh', age: 22 },
];

const reducerMethod = (users, action) => {
    switch (action.type) {
        case 'addUser':
            return [...users, action.newUser];
        case 'updateUser':
            return users.map(user =>
                user.id === action.updatedUser.id ? action.updatedUser : user
            );
        case 'deleteUser':
            return users.filter(user => user.id !== action.id);
        default:
            return users;
    }
};

function Reduceval() {
    const [users, dispatch] = useReducer(reducerMethod, userData);
    const [newUser, setNewUser] = useState({ id: '', name: '', age: '' });
    const [updatedUser, setUpdatedUser] = useState({ id: '', name: '', age: '' });

    const handleAddUser = () => {
        if (newUser.id && newUser.name && newUser.age) {
            dispatch({ type: 'addUser', newUser });
        }
    };

    const handleUpdateUser = () => {
        if (updatedUser.id && updatedUser.name && updatedUser.age) {
            dispatch({ type: 'updateUser', updatedUser });
            setUpdatedUser({ id: '', name: '', age: '' });
        }
    };

    const handleDeleteUser = id => {
        dispatch({ type: 'deleteUser', id });
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        Id: {user.id}, {user.name}, Age: {user.age}
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Add User</h2>
            <input
                type="number"
                placeholder="ID"
                value={newUser.id}
                onChange={e => setNewUser({ ...newUser, id: Number(e.target.value) })}
            />
            <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={e => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Age"
                value={newUser.age}
                onChange={e => setNewUser({ ...newUser, age: Number(e.target.value) })}
            />
            <button onClick={handleAddUser}>Add User</button>

            <h2>Update User</h2>
            <input
                type="number"
                placeholder="ID"
                value={updatedUser.id}
                onChange={e => setUpdatedUser({ ...updatedUser, id: Number(e.target.value) })}
            />
            <input
                type="text"
                placeholder="Name"
                value={updatedUser.name}
                onChange={e => setUpdatedUser({ ...updatedUser, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Age"
                value={updatedUser.age}
                onChange={e => setUpdatedUser({ ...updatedUser, age: Number(e.target.value) })}
            />
            <button onClick={handleUpdateUser}>Update User</button>
        </div>
    );
}

export default Reduceval;