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
  removeItem: (name: string) => void
  updateQuantity: (name: string, newValue: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemProps[]>([])

  function addItem(item: ItemProps) {
    setItems((state) => {
      let itemExistsInCart = false

      state.forEach((savedItem) => {
        if (savedItem.name === item.name) {
          savedItem.quantity += item.quantity
          itemExistsInCart = true
        }
      })

      return itemExistsInCart ? state : [...state, item]
    })
  }

  function removeItem(name: string) {
    setItems((state) => state.filter((savedItem) => savedItem.name !== name))
  }

  function updateQuantity(name: string, newValue: number) {
    setItems((state) =>
      state.map((savedItem) => {
        if (savedItem.name === name) {
          savedItem.quantity = newValue
        }

        return savedItem
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
