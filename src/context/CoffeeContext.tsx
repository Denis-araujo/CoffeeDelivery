import { createContext, ReactNode, useState } from 'react'
import { Coffees } from '../pages/Home/mocks/coffees'

export interface CoffeeType {
  id: number
  img: string
  type: string[]
  title: string
  description: string
  quantityCurrent: number
  quantityInventory: number
  price: number
}

interface Coffeeprice {
  subTotal: number
  total: number
}

interface CoffeeContextType {
  coffees: CoffeeType[]
  products: CoffeeType[]
  coffeePrices: Coffeeprice
  addProduct: (id: number) => void
  removeProduct: (id: number) => void
  increaseTheQuantityOfTheProduct: (id: number) => void
  reduceTheQuantityOfTheProduct: (id: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContextProvider = ({
  children,
}: CoffeeContextProviderProps) => {
  const [products, setProducts] = useState<CoffeeType[]>([])
  const [coffees, setCoffees] = useState<CoffeeType[]>(Coffees)

  const coffeePrices = products.reduce(
    (acc, valueCurrent) => {
      acc.subTotal = valueCurrent.quantityCurrent * valueCurrent.price
      acc.total = acc.subTotal + acc.total
      return acc
    },
    {
      subTotal: 0,
      total: 0,
    },
  )

  function addProduct(id: number) {
    const productCurrent = coffees.find((coffee) => coffee.id === id)

    const productDoesNotExistInTheList =
      productCurrent && !products.includes(productCurrent)

    if (productDoesNotExistInTheList) {
      setProducts([...products, productCurrent])
    }
  }

  function increaseTheQuantityOfTheProduct(id: number) {
    const productCurrent = coffees.find((coffee) => coffee.id === id)

    const currentQuantityLessThanStock =
      productCurrent &&
      productCurrent.quantityCurrent < productCurrent.quantityInventory

    if (currentQuantityLessThanStock) {
      setCoffees(
        coffees.map((item) => {
          if (item.id === productCurrent.id) {
            item.quantityCurrent++

            return item
          }

          return item
        }),
      )
    }
  }

  function reduceTheQuantityOfTheProduct(id: number) {
    const productCurrent = coffees.find((coffee) => coffee.id === id)

    const currentQuantityCannotBeLessThanOne =
      productCurrent && productCurrent.quantityCurrent !== 1

    if (currentQuantityCannotBeLessThanOne) {
      setCoffees(
        coffees.map((item) => {
          if (item.id === productCurrent.id) {
            item.quantityCurrent--

            return item
          }

          return item
        }),
      )
    }
  }

  function removeProduct(id: number) {
    const filteredProducts = products.filter((product) => product.id !== id)

    if (products.length > 1) {
      setProducts(filteredProducts)
    }
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        products,
        coffeePrices,
        addProduct,
        removeProduct,
        increaseTheQuantityOfTheProduct,
        reduceTheQuantityOfTheProduct,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
