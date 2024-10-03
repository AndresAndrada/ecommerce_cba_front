import create from 'zustand';
import { persist } from 'zustand/middleware';
// import { persist } from "zustand/middlewxare";

export const useTypeStore = create(persist((set) => ({
    DataPerfilType: [], // DATA_PERFIL_Type
    Type: [], // DATA_Type
    Details: {},

    setType: (values) => set({ Type: values }),
    setDataPerfilType: (values) => set({ DataPerfilType: values }),
    setDetails: (values) => set({ Details: values }),
})));