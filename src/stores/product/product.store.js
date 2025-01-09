import create from 'zustand';
// import { persist } from "zustand/middlewxare";

export const useProductStore = create((set) => ({
    DataPerfilProduct: [], // DATA_PERFIL_USER
    Products: [], // DATA_Product
    ProductId: {},
    // Categories: [],
    ItemsInCart: [],
    DetailsProduct: {},
    TotalProductsPages: 0,
    CurrentProductsPage: 1,
    SelectedTab: '',
    ProductById: {},
    ConsumerProducts: 'Minorista',
    Filter: 'Todos',

    setProducts: (values) => set({ Products: values }),
    setProductId: (values) => set({ ProductId: values }),
    setItemsInCart: (values) => set({ ItemsInCart: values }),
    setDataPerfilProduct: (values) => set({ DataPerfilProduct: values }),
    setDetailsProduct: (values) => set({ DetailsProduct: values }),
    setProductById: (values) => set({ ProductById: values }),
    setTotalProductsPages: (totalPages) =>
        set((prevState) => ({ ...prevState, TotalProductsPages: totalPages })),
    setCurrentProductsPage: (page) =>
        set((prevState) => ({ ...prevState, CurrentPage: page })),
    setSelectedTab: (tab) =>
        set((prevState) => ({ ...prevState, SelectedTab: tab })),
    setConsumerProducts: (consumer) =>
        set((prevState) => ({ ...prevState, ConsumerProducts: consumer })),
    setFilter: (filter) => set({ Filter: filter }),
}));