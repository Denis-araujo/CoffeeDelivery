import { createContext, ReactNode, useState } from 'react'

interface DeliveryAddressProps {
  complement?: string | undefined
  cep: number
  street: string
  numberStreet: number
  district: string
  city: string
  UF: string
  payment: string
}

interface DeliveryAddressContextType {
  deliveryAddress: DeliveryAddressProps | undefined
  addDeliveryAddress: (data: DeliveryAddressProps) => void
}

export const DeliveryAddressContext = createContext(
  {} as DeliveryAddressContextType,
)

interface DeliveryAddressProviderProps {
  children: ReactNode
}

export const DeliveryAddressProvider = ({
  children,
}: DeliveryAddressProviderProps) => {
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressProps>()

  function addDeliveryAddress(data: DeliveryAddressProps) {
    setDeliveryAddress(data)
  }

  return (
    <DeliveryAddressContext.Provider
      value={{
        deliveryAddress,
        addDeliveryAddress,
      }}
    >
      {children}
    </DeliveryAddressContext.Provider>
  )
}
