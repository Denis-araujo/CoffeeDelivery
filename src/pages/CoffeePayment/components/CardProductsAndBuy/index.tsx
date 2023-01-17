import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { priceFormatter } from '../../../../utils/formatter'
import * as S from './styles'

export function CardProductsAndBuy() {
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
  const totalPriceOfCoffees = coffeePrices.total
  const total = coffeePrices.total + deliveryPrice

  return (
    <S.CardProductsAndBuy>
      {products.length === 0 ? (
        <p>
          Você ainda não selecionou nenhum café, clique no icone da loja para
          voltar a tela inicial
        </p>
      ) : (
        <>
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
                              handleIncreaseTheQuantityOfTheProduct(product.id)
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
        </>
      )}
    </S.CardProductsAndBuy>
  )
}
