import { Layout } from "@/types/Layout";
import { create } from "zustand"

type LayoutValues = {
    values?: Layout;
    onChange: (values: Layout) => void;
}

export const useLayoutValues = create<LayoutValues>((set) => ({
    values: undefined,
    onChange: (values: Layout) => set({ values }),
}))