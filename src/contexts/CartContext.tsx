import { createContext, ReactNode, useState } from 'react'

export interface ItemProps {
  image: string
  name: string
  price: number
  quantity: number
}

interface CartContextProps {
  items: ItemProps[]
  addItem: (item: ItemProps) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemProps[]>([])

  function addItem(item: ItemProps) {
    setItems((state) => [...state, item])
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}
