import { ShoppingCart } from 'phosphor-react'

import * as S from './styles'
import { HomeHeader } from './components/HomeHeader'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Home() {
  const {
    coffees,
    addProduct,
    increaseTheQuantityOfTheProduct,
    reduceTheQuantityOfTheProduct,
  } = useContext(CoffeeContext)

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  function handleIncreaseTheQuantityOfTheProduct(id: number) {
    increaseTheQuantityOfTheProduct(id)
  }

  function handleReduceTheQuantityOfTheProduct(id: number) {
    reduceTheQuantityOfTheProduct(id)
  }

  return (
    <main>
      <HomeHeader />
      <S.HomeBody>
        <S.TitleCoffe>Nossos cafés</S.TitleCoffe>

        <S.CoffeeList>
          {coffees.map((coffee) => {
            return (
              <S.Coffee key={coffee.id}>
                <div>
                  <img src={coffee.img} alt="" />
                  <S.CoffeeTypeList>
                    {coffee.type.map((item, index) => (
                      <S.CoffeeType key={index}>{item}</S.CoffeeType>
                    ))}
                  </S.CoffeeTypeList>
                  <S.CoffeeTitle>{coffee.title}</S.CoffeeTitle>
                  <S.CoffeeDescription>
                    {coffee.description}
                  </S.CoffeeDescription>

                  <S.ContainerPriceAndAcquisition>
                    <span>
                      R${' '}
                      <S.PriceCoffee>
                        {coffee.price.toLocaleString('pt-br', {
                          minimumFractionDigits: 2,
                        })}
                      </S.PriceCoffee>
                    </span>
                    <S.QuantityCoffee>
                      <div>
                        <button
                          onClick={() =>
                            handleReduceTheQuantityOfTheProduct(coffee.id)
                          }
                        >
                          -
                        </button>
                        {coffee.quantityCurrent}
                        <button
                          onClick={() =>
                            handleIncreaseTheQuantityOfTheProduct(coffee.id)
                          }
                        >
                          +
                        </button>
                      </div>
                      <ShoppingCart
                        weight="fill"
                        size={22}
                        onClick={() => handleAddProduct(coffee.id)}
                      />
                    </S.QuantityCoffee>
                  </S.ContainerPriceAndAcquisition>
                </div>
              </S.Coffee>
            )
          })}
        </S.CoffeeList>
      </S.HomeBody>
    </main>
  )
}
