import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {SearchHistorySearch} from './searchHistoryType';

const useSearchHistoryStore = create<SearchHistorySearch>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userList = get().userList;
        const updatedList = [...userList, user];
        set({userList: updatedList});
      },
      removeUser: userId => {
        const userList = get().userList;
        const updatedList = userList.filter(user => user.id !== userId);
        set({userList: updatedList});
      },
      clearUserList: () => set({userList: []}),
    }),
    {name: '@SearchHistory', storage},
  ),
);

export function useSearchHistory(): SearchHistorySearch['userList'] {
  const userList = useSearchHistoryStore(state => state.userList);
  return userList;
}

export function useSearchHistoryService(): Omit<
  SearchHistorySearch,
  'userList'
> {
  return useSearchHistoryStore(state => ({
    addUser: state.addUser,
    removeUser: state.removeUser,
    clearUserList: state.clearUserList,
  }));
}
