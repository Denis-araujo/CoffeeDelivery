import * as S from './styles'
import { useContext } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { DeliveryAddressContext } from '../../context/DeliveryAddressContext'
import { DeliveryAndPaymentCard } from './components/ DeliveryAndPaymentCard'
import { CardProductsAndBuy } from './components/CardProductsAndBuy'

import * as zod from 'zod'

const addressValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe um cep'),
  street: zod.string().min(1, 'Informe uma Rua'),
  numberStreet: zod.number().min(1, 'Informe um número'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  UF: zod.string().min(1, 'Informe o UF'),
  payment: zod.enum(['debito', 'credito', 'dinheiro']),
})

type DeliveryAddressData = zod.infer<typeof addressValidationSchema>

export function CoffeePayment() {
  const { addDeliveryAddress } = useContext(DeliveryAddressContext)

  const navigate = useNavigate()

  const deliveryAddress = useForm<DeliveryAddressData>({
    resolver: zodResolver(addressValidationSchema),
  })

  const { handleSubmit } = deliveryAddress

  function handleSubmitAddress(data: DeliveryAddressData) {
    addDeliveryAddress(data)

    navigate('/RequestMadeSuccessfully')
  }

  return (
    <main>
      <S.FormPayment onSubmit={handleSubmit(handleSubmitAddress)} action="">
        <FormProvider {...deliveryAddress}>
          <DeliveryAndPaymentCard />
        </FormProvider>

        <div>
          <span>Cafés selecionados</span>

          <CardProductsAndBuy />
        </div>
      </S.FormPayment>
    </main>
  )
}
