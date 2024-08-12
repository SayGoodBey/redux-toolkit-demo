import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser, selectAllUsers } from './userSlice';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [name, setName] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleAddUser = () => {
        dispatch(addUser({ id: Date.now(), name }));
        setName('');
    };

    const handleUpdateUser = () => {
        dispatch(updateUser({ id: editingId, changes: { name } }));
        setName('');
        setEditingId(null);
    };

    const handleEditUser = (user) => {
        setName(user.name);
        setEditingId(user.id);
    };

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <h1>Users</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="输入"
            />
            {editingId ? (
                <button onClick={handleUpdateUser}>编辑</button>
            ) : (
                <button onClick={handleAddUser}>添加</button>
            )}
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleEditUser(user)}>Edit</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;