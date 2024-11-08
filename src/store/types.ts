export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Todo {
  userId: number;
  id: number;
}

export interface CommonState {
  users: User[];
  todos: Todo[];
  status: 'idle' | 'succeeded' | 'failed';
  error: string | null;
}
