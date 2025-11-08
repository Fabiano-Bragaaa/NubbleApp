import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

import {Storage} from '../storage';

const MMKVInstance = new MMKV();

export const MMKVStorage: Storage = {
  getItem: async key => {
    const item = MMKVInstance.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    MMKVInstance.set(key, JSON.stringify(value));
  },
  removeItem: async key => MMKVInstance.delete(key),
};

export const zustandMMKVStorage: StateStorage = {
  getItem: key => {
    try {
      const item = MMKVInstance.getString(key);
      return item ?? null;
    } catch (error) {
      console.error('Error getting item from MMKV:', error);
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      MMKVInstance.set(key, value);
    } catch (error) {
      console.error('Error setting item to MMKV:', error);
    }
  },
  removeItem: key => {
    try {
      MMKVInstance.delete(key);
    } catch (error) {
      console.error('Error removing item from MMKV:', error);
    }
  },
};
