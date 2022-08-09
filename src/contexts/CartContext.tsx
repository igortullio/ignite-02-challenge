import { createContext, ReactNode, useState } from 'react'

export interface ItemProps {
  image: string
  name: string
  price: number
  quantity: number
}

export interface DeliveryProps {
  document: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  district: string
}

export type PaymentOption = 'cash' | 'credit' | 'debit'
interface CartContextProps {
  items: ItemProps[]
  itemsValue: number
  delivery: DeliveryProps | null | undefined
  payment: PaymentOption | null
  addItem: (item: ItemProps) => void
  removeItem: (name: string) => void
  updateQuantity: (name: string, newValue: number) => void
  updateDelivery: (delivery: DeliveryProps) => void
  updatePayment: (payment: PaymentOption) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemProps[]>([])
  const [delivery, setDelivery] = useState<DeliveryProps | null>()
  const [payment, setPayment] = useState<PaymentOption | null>(null)

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

  function updateDelivery(delivery: DeliveryProps) {
    setDelivery(delivery)
  }

  function updatePayment(payment: PaymentOption) {
    setPayment(payment)
  }

  const itemsValue = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        items,
        itemsValue,
        delivery,
        payment,
        addItem,
        removeItem,
        updateQuantity,
        updateDelivery,
        updatePayment,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
