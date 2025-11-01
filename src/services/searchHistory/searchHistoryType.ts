import {User} from '../../domain/User/userTypes';

export type SearchHistoryService = {
  userList: User[];
  addUser: (user: User) => void;
  removeUser: (userId: User['id']) => void;
  clearUserList: () => void;
};
