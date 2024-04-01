import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const StorageKey = 'appStore';

type AppState = {
  debug: boolean;
  isOpenSidebar: boolean;
  color: string;
};

type AppAction = {
  setIsOpenSidebar: (value: boolean) => void;
  setDebug: (value: boolean) => void;
  setColor: (value: string) => void;
};

const useAppStore = create(
  persist<AppState & AppAction>(
    (set) => ({
      isOpenSidebar: true,
      debug: false,
      color: '#151515',
      setIsOpenSidebar: (value) => set({ isOpenSidebar: value }),
      setDebug: (value) => set({ debug: value }),
      setColor: (value) => {
        set({ color: value });
        document.documentElement.style.setProperty('--ui-primary', value);
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

export default useAppStore;
