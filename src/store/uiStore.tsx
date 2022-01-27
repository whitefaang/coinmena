/**
 * Store for all ui related config
 */
import create from 'zustand'
import { Coin, UserInfo } from '../models'

interface UIStore {
  /**
   * Selected coin from the "<AssetsTable />" component
   */
  selectedCoin: Coin | null
  /**
   * User info of the currently logged in user
   */
  user: UserInfo | null
  /**
   * func to set the 'selectedCoin' from <AssetsTable />
   * @param selectedCoin
   * @returns
   */
  selectCoin: (selectedCoin: Coin | null) => void
  /**
   * func to set the 'user' from <LoginForm />
   * @param user
   * @returns
   */
  setUser: (user: UserInfo | null) => void
}

/**
 * UI store used to store ui related config
 */
export const useUIStore = create<UIStore>((set) => ({
  selectedCoin: null,
  user: null,
  selectCoin: (selectedCoin) => set((state) => ({ ...state, selectedCoin })),
  setUser: (user) => set((state) => ({ ...state, user })),
}))
