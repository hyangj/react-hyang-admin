import { UserType } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const StorageKey = 'userStore';

type UserState = {
  user: UserType;
};

type UserAction = {
  setUser: (value: object) => void;
};

const useUserStore = create(
  persist<UserState & UserAction>(
    (set) => ({
      user: {},
      setUser: (value) => {
        set({ user: value });
      },
    }),
    {
      name: StorageKey,
      storage: createJSONStorage(() => localStorage),
      // 일부만 persist 적용
      // partialize: (state) => ({ ... })
    },
  ),
);

export default useUserStore;
