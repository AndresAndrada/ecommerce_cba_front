import create from 'zustand';
// import { persist } from "zustand/middlewxare";

export const productUserStore = create((set) => ({
    DataPerfilProduct: [], // DATA_PERFIL_USER
    Product: {}, // DATA_Product
    DetailsProduct: {},

    setProduct: (values) => set({ Product: values }),
    setDataPerfilProduct: (values) => set({ DataPerfilProduct: values }),
    setDetailsProduct: (values) => set({ DetailsProduct: values }),
}));