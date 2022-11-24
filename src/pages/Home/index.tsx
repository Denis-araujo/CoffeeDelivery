import ExpressoTradicional from '../../assets/ExpressoTradicional.svg'

import { ShoppingCart } from 'phosphor-react'

import * as S from './styles'
import { HomeHeader } from './components/HomeHeader'

export function Home() {
  return (
    <main>
      <HomeHeader />
      <S.HomeBody>
        <S.TitleCoffe>Nossos cafés</S.TitleCoffe>

        <S.CoffeeList>
          <S.Coffee>
            <div>
              <img src={ExpressoTradicional} alt="" />
              <S.CoffeeType>Tradicional</S.CoffeeType>

              <S.CoffeeTitle>Expresso Tradicional</S.CoffeeTitle>
              <S.CoffeeDescription>
                O tradicional café feito com água quente e grãos moídos
              </S.CoffeeDescription>

              <S.ContainerPriceAndAcquisition>
                <span>
                  R$ <S.PriceCoffee>9,90</S.PriceCoffee>
                </span>
                <S.QuantityCoffee>
                  <div>
                    <button>-</button>1<button>+</button>
                  </div>
                  <ShoppingCart weight="fill" size={22} />
                </S.QuantityCoffee>
              </S.ContainerPriceAndAcquisition>
            </div>
          </S.Coffee>
          <S.Coffee>
            <div>
              <img src={ExpressoTradicional} alt="" />
              <S.CoffeeType>Tradicional</S.CoffeeType>

              <S.CoffeeTitle>Expresso Tradicional</S.CoffeeTitle>
              <S.CoffeeDescription>
                O tradicional café feito com água quente e grãos moídos
              </S.CoffeeDescription>

              <S.ContainerPriceAndAcquisition>
                <span>
                  R$ <S.PriceCoffee>9,90</S.PriceCoffee>
                </span>
                <S.QuantityCoffee>
                  <div>
                    <button>-</button>1<button>+</button>
                  </div>
                  <ShoppingCart weight="fill" size={22} />
                </S.QuantityCoffee>
              </S.ContainerPriceAndAcquisition>
            </div>
          </S.Coffee>
          <S.Coffee>
            <div>
              <img src={ExpressoTradicional} alt="" />
              <S.CoffeeType>Tradicional</S.CoffeeType>

              <S.CoffeeTitle>Expresso Tradicional</S.CoffeeTitle>
              <S.CoffeeDescription>
                O tradicional café feito com água quente e grãos moídos
              </S.CoffeeDescription>

              <S.ContainerPriceAndAcquisition>
                <span>
                  R$ <S.PriceCoffee>9,90</S.PriceCoffee>
                </span>
                <S.QuantityCoffee>
                  <div>
                    <button>-</button>1<button>+</button>
                  </div>
                  <ShoppingCart weight="fill" size={22} />
                </S.QuantityCoffee>
              </S.ContainerPriceAndAcquisition>
            </div>
          </S.Coffee>
        </S.CoffeeList>
      </S.HomeBody>
    </main>
  )
}
