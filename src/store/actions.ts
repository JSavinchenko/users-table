import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, Todo} from './types';

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await response.json();
    return user;
  },
);

export const fetchTodo = createAsyncThunk<Todo[]>(
  'todos/fetchTodo',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos ');
    const todo = await response.json();
    return todo;
  },
);
