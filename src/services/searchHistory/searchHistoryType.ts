import {User} from '@domain';

export type SearchHistorySearch = {
  userList: User[];
  addUser: (user: User) => void;
  removeUser: (userId: User['id']) => void;
  clearUserList: () => void;
};
