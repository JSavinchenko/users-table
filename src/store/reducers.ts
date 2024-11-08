import {createSlice} from '@reduxjs/toolkit';
import {CommonState} from './types';
import {fetchUsers, fetchTodo} from './actions';

const initialState: CommonState = {
  users: [],
  todos: [],
  status: 'idle',
  error: null,
};

const usersTodoSlice = createSlice({
  name: 'usersTodos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default usersTodoSlice.reducer;
