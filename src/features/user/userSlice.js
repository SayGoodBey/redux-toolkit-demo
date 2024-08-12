import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// 定义用户适配器
const usersAdapter = createEntityAdapter();

// 获取初始状态
const initialState = usersAdapter.getInitialState();

// 创建 slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    deleteUser: usersAdapter.removeOne,
    setUsers: usersAdapter.setAll,
  },
});

// 导出 actions 和 reducer
export const { addUser, updateUser, deleteUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;

// 导出选择器
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(state => state.users);