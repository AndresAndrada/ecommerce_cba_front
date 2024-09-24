import create from 'zustand';
// import { persist } from "zustand/middlewxare";

export const useProductStore = create((set) => ({
    DataPerfilProduct: [], // DATA_PERFIL_USER
    Product: {}, // DATA_Product
    Categories: [],
    DetailsProduct: {},

    setProduct: (values) => set({ Product: values }),
    setDataPerfilProduct: (values) => set({ DataPerfilProduct: values }),
    setDetailsProduct: (values) => set({ DetailsProduct: values }),
}));