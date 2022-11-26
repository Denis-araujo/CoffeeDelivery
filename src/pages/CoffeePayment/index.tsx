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

export function CoffeePayment() {
  const {
    products,
    coffeePrices,
    increaseTheQuantityOfTheProduct,
    reduceTheQuantityOfTheProduct,
    removeProduct,
  } = useContext(CoffeeContext)

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
  const deliveryPriceFormat = deliveryPrice.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
  const totalPriceOfCoffees = coffeePrices.total.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  const total = (coffeePrices.total + deliveryPrice).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <main>
      <S.FormPayment action="">
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
                <S.InputAddress width="12.5rem" type="text" placeholder="CEP" />
                <S.InputAddress type="text" placeholder="Rua" />
                <div>
                  <S.InputAddress
                    width="12.5rem"
                    type="text"
                    placeholder="Número"
                  />
                  <S.InputAddress
                    width="63.3%"
                    type="text"
                    placeholder="Complemento"
                  />
                </div>
                <div>
                  <S.InputAddress
                    width="12.5rem"
                    type="text"
                    placeholder="Bairro"
                  />
                  <S.InputAddress
                    width="17.25rem"
                    type="text"
                    placeholder="Cidade"
                  />
                  <S.InputAddress width="13%" type="text" placeholder="UF" />
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
                <S.PaymentMethodButton>
                  <CreditCard />
                  Cartao de crédito
                </S.PaymentMethodButton>
                <S.PaymentMethodButton>
                  <Storefront />
                  Cartão de débito
                </S.PaymentMethodButton>
                <S.PaymentMethodButton>
                  <Money />
                  Dinheiro
                </S.PaymentMethodButton>
              </S.ListPayment>
            </S.CardPayment>
          </div>
        </S.CardRequest>

        <div>
          <span>Cafés selecionados</span>

          <S.CardProductsAndBuy>
            <S.CardProducts>
              {products.map((product) => {
                const coffeeSubtotal = (
                  product.price * product.quantityCurrent
                ).toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })

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
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            <Trash />
                            Remover
                          </S.ButtonRemoverCoffee>
                        </S.QuantityCoffeeAndRemove>
                      </div>
                    </S.InformationCard>
                    <S.PriceCoffee>R$ {coffeeSubtotal}</S.PriceCoffee>
                  </S.CardProduct>
                )
              })}
            </S.CardProducts>

            <S.CardPrices>
              <S.Prices>
                <span>
                  Total de itens <span>{totalPriceOfCoffees}</span>
                </span>
                <span>
                  Entrega <span>{deliveryPriceFormat}</span>
                </span>
                <S.PriceTotal>
                  Total <span>{total}</span>
                </S.PriceTotal>
              </S.Prices>

              <S.ButtonConfirmRequest>confirmar pedido</S.ButtonConfirmRequest>
            </S.CardPrices>
          </S.CardProductsAndBuy>
        </div>
      </S.FormPayment>
    </main>
  )
}
