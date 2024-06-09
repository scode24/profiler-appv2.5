import { create } from "zustand";

const useStarterCaptionManagementStore = create((set) => ({
  isCaptionVisible: true,
  setCaptionFlag: (flag) => set({ isCaptionVisible: flag }),
}));

export default useStarterCaptionManagementStore;
