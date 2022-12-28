import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Storefront,
  Money,
  Trash,
} from 'phosphor-react'

import * as S from './styles'
import { CoffeeContext } from '../../context/CoffeeContext'
import { useContext } from 'react'

import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { priceFormatter } from '../../utils/formatter'
import { useNavigate } from 'react-router-dom'
import { DeliveryAddressContext } from '../../context/DeliveryAddressContext'

const addressValidationSchema = zod.object({
  cep: zod.number().min(8, 'Informe um cep(minimo 8)'),
  street: zod.string().min(1, 'Informe uma Rua'),
  numberStreet: zod.number(),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  UF: zod.string().min(1, 'Informe o UF'),
  payment: zod.string(),
})

type DeliveryAddressData = zod.infer<typeof addressValidationSchema>

export function CoffeePayment() {
  const {
    products,
    coffeePrices,
    increaseTheQuantityOfTheProduct,
    reduceTheQuantityOfTheProduct,
    removeProduct,
  } = useContext(CoffeeContext)

  const { addDeliveryAddress } = useContext(DeliveryAddressContext)

  const navigate = useNavigate()

  const deliveryAddress = useForm<DeliveryAddressData>({
    resolver: zodResolver(addressValidationSchema),
    defaultValues: {
      cep: Number('CEP'),
      city: '',
      complement: '',
      district: '',
      numberStreet: Number('Número'),
      street: '',
      UF: '',
      payment: '',
    },
  })

  const { register, handleSubmit, setValue, watch } = deliveryAddress

  function handleSubmitAndress(data: DeliveryAddressData) {
    addDeliveryAddress(data)

    navigate('/RequestMadeSuccessfully')
  }

  function handleIncreaseTheQuantityOfTheProduct(id: number) {
    increaseTheQuantityOfTheProduct(id)
  }

  function handleReduceTheQuantityOfTheProduct(id: number) {
    reduceTheQuantityOfTheProduct(id)
  }

  function handleRemoveProduct(id: number) {
    removeProduct(id)
  }

  const deliveryPrice = 3.3
  const totalPriceOfCoffees = coffeePrices.total
  const total = coffeePrices.total + deliveryPrice

  const payment = watch('payment')

  return (
    <main>
      <S.FormPayment onSubmit={handleSubmit(handleSubmitAndress)} action="">
        <S.CardRequest>
          <span>Complete seu pedido</span>
          <div>
            <S.AddressData>
              <div>
                <MapPinLine size={20} weight="fill" />
                <div>
                  <S.AddressDataTitle>Endereço de Entrega</S.AddressDataTitle>
                  <S.AddressDataSubTitle>
                    Informe o endereço onde deseja receber seu pedido
                  </S.AddressDataSubTitle>
                </div>
              </div>

              <S.ListInputAddress>
                <S.InputAddress
                  width="12.5rem"
                  type="number"
                  placeholder="CEP"
                  {...register('cep', { valueAsNumber: true })}
                />
                <S.InputAddress
                  type="text"
                  placeholder="Rua"
                  {...register('street')}
                />
                <div>
                  <S.InputAddress
                    width="12.5rem"
                    type="number"
                    placeholder="Número"
                    {...register('numberStreet', { valueAsNumber: true })}
                  />
                  <S.InputAddress
                    width="63.3%"
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                </div>
                <div>
                  <S.InputAddress
                    width="12.5rem"
                    type="text"
                    placeholder="Bairro"
                    {...register('district')}
                  />
                  <S.InputAddress
                    width="17.25rem"
                    type="text"
                    placeholder="Cidade"
                    {...register('city')}
                  />
                  <S.InputAddress
                    width="13%"
                    type="text"
                    placeholder="UF"
                    {...register('UF')}
                  />
                </div>
              </S.ListInputAddress>
            </S.AddressData>
            <S.CardPayment>
              <div>
                <CurrencyDollar size={20} />
                <div>
                  <S.AddressDataTitle>Pagamento</S.AddressDataTitle>
                  <S.AddressDataSubTitle>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </S.AddressDataSubTitle>
                </div>
              </div>

              <S.ListPayment>
                <S.PaymentMethod
                  type="button"
                  active={payment === 'Cartao de crédito'}
                  onClick={() => setValue('payment', 'Cartao de crédito')}
                >
                  <CreditCard />
                  Cartao de crédito
                </S.PaymentMethod>
                <S.PaymentMethod
                  active={payment === 'Cartão de débito'}
                  type="button"
                  onClick={() => setValue('payment', 'Cartão de débito')}
                >
                  <Storefront />
                  Cartão de débito
                </S.PaymentMethod>
                <S.PaymentMethod
                  active={payment === 'dinheiro'}
                  type="button"
                  onClick={() => setValue('payment', 'dinheiro')}
                >
                  <Money />
                  Dinheiro
                </S.PaymentMethod>
              </S.ListPayment>
            </S.CardPayment>
          </div>
        </S.CardRequest>

        <div>
          <span>Cafés selecionados</span>

          <S.CardProductsAndBuy>
            <S.CardProducts>
              {products.map((product) => {
                const coffeeSubtotal = product.price * product.quantityCurrent

                return (
                  <S.CardProduct key={product.id}>
                    <S.InformationCard>
                      <S.ImgCoffee src={product.img} alt="" />

                      <div>
                        <S.TitleCoffee>{product.title}</S.TitleCoffee>
                        <S.QuantityCoffeeAndRemove>
                          <S.QuantityCoffee>
                            <button
                              type="button"
                              onClick={() => {
                                handleReduceTheQuantityOfTheProduct(product.id)
                              }}
                            >
                              -
                            </button>
                            <span>{product.quantityCurrent}</span>
                            <button
                              type="button"
                              onClick={() => {
                                handleIncreaseTheQuantityOfTheProduct(
                                  product.id,
                                )
                              }}
                            >
                              +
                            </button>
                          </S.QuantityCoffee>
                          <S.ButtonRemoverCoffee
                            type="button"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            <Trash />
                            Remover
                          </S.ButtonRemoverCoffee>
                        </S.QuantityCoffeeAndRemove>
                      </div>
                    </S.InformationCard>
                    <S.PriceCoffee>
                      {priceFormatter.format(coffeeSubtotal)}
                    </S.PriceCoffee>
                  </S.CardProduct>
                )
              })}
            </S.CardProducts>

            <S.CardPrices>
              <S.Prices>
                <span>
                  Total de itens{' '}
                  <span>{priceFormatter.format(totalPriceOfCoffees)}</span>
                </span>
                <span>
                  Entrega <span>{priceFormatter.format(deliveryPrice)}</span>
                </span>
                <S.PriceTotal>
                  Total <span>{priceFormatter.format(total)}</span>
                </S.PriceTotal>
              </S.Prices>

              <S.ButtonConfirmRequest type="submit">
                confirmar pedido
              </S.ButtonConfirmRequest>
            </S.CardPrices>
          </S.CardProductsAndBuy>
        </div>
      </S.FormPayment>
    </main>
  )
}
