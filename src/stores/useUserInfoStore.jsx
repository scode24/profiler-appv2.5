import { create } from "zustand";

const useUserInfoStore = create((set) => ({
  userInfo: undefined,
  setUserInfo: (newUserInfo) => set({ userInfo: newUserInfo }),
}));

export default useUserInfoStore;
