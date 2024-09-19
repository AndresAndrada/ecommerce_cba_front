import create from 'zustand';
import { persist } from 'zustand/middleware';
// import { persist } from "zustand/middlewxare";

export const useUserStore = create(persist((set) => ({
    Authenticated: false, // Estado inicial
    DataPerfilUser: [], // DATA_PERFIL_USER
    User: {}, // DATA_USER
    Details: {},
    Login: false,

    setAuthenticated: (isAuthenticated) => set({ Authenticated: isAuthenticated }),
    setUser: (values) => set({ User: values }),
    setDataPerfilUser: (values) => set({ DataPerfilUser: values }),
    setDetails: (values) => set({ Details: values }),
})));