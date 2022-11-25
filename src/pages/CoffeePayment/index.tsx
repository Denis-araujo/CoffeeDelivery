import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Storefront,
  Money,
  Trash,
} from 'phosphor-react'

import * as S from './styles'
import ExpressoTradicional from '../../assets/ExpressoTradicional.svg'

export function CoffeePayment() {
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
              <S.CardProduct>
                <S.InformationCard>
                  <S.ImgCoffee src={ExpressoTradicional} alt="" />

                  <div>
                    <S.TitleCoffee>Expresso tradicional</S.TitleCoffee>
                    <S.QuantityCoffeeAndRemove>
                      <S.QuantityCoffee>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </S.QuantityCoffee>
                      <S.ButtonRemoverCoffee>
                        <Trash />
                        Remover
                      </S.ButtonRemoverCoffee>
                    </S.QuantityCoffeeAndRemove>
                  </div>
                </S.InformationCard>
                <S.PriceCoffee>R$ 9,90</S.PriceCoffee>
              </S.CardProduct>

              <S.CardProduct>
                <S.InformationCard>
                  <S.ImgCoffee src={ExpressoTradicional} alt="" />

                  <div>
                    <S.TitleCoffee>Expresso tradicional</S.TitleCoffee>
                    <S.QuantityCoffeeAndRemove>
                      <S.QuantityCoffee>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </S.QuantityCoffee>
                      <S.ButtonRemoverCoffee>
                        <Trash />
                        Remover
                      </S.ButtonRemoverCoffee>
                    </S.QuantityCoffeeAndRemove>
                  </div>
                </S.InformationCard>
                <S.PriceCoffee>R$ 9,90</S.PriceCoffee>
              </S.CardProduct>
            </S.CardProducts>

            <S.CardPrices>
              <S.Prices>
                <span>
                  Total de itens <span>R$ 29,70</span>
                </span>
                <span>
                  Entrega <span>R$ 3,50</span>
                </span>
                <S.PriceTotal>
                  Total <span>R$ 33,20</span>
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
