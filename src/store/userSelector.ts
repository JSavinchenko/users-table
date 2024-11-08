import {createSelector} from '@reduxjs/toolkit';

export const selectUsersWithTodoCount = createSelector(
  (state) => state.usersTodo.users,
  (state) => state.usersTodo.todos,
  (users, todos) => {
    return users.map((user: {id: number}) => ({
      ...user,
      todoCount: todos.filter(
        (todo: {userId: number}) => todo.userId === user.id,
      ).length,
    }));
  },
);
