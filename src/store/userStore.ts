import { create } from 'zustand'
import { IUser } from '../@types/IUser';

type UserStoreFunctions = {
    login: (token: string) => void;
    isLoggedIn: () => boolean;
    logout: () => void;
};

export const useUserStore = create<IUser & UserStoreFunctions>((set, get) => ({
    token: '',
    login: (token: string) => set({ token }),
    isLoggedIn: () => !!get().token,
    logout: () => set({token: ''})
}))