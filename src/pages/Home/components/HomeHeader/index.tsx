import * as S from './styles'
import CoffeeHome from '../../../../assets/CoffeeHome.svg'

import { ShoppingCart, Coffee, Package, Timer } from 'phosphor-react'

export function HomeHeader() {
  return (
    <S.HomeHeader>
      <S.HomeHeaderContent>
        <S.HomeHeaderContentTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </S.HomeHeaderContentTitle>

        <div>
          <S.HomeCard>
            <div>
              <S.QualityCard backgroundIconColor="yellowDark">
                <ShoppingCart weight="fill" size={13} />
                Compra simples e segura
              </S.QualityCard>
              <S.QualityCard backgroundIconColor="yellow">
                <Timer weight="fill" size={13} />
                Entrega rápida e rastreada
              </S.QualityCard>
            </div>
            <div>
              <S.QualityCard backgroundIconColor="baseText">
                <Package weight="fill" size={13} />
                Embalagem mantém o café intacto
              </S.QualityCard>
              <S.QualityCard backgroundIconColor="purple">
                <Coffee weight="fill" size={13} />O café chega fresquinho até
                você
              </S.QualityCard>
            </div>
          </S.HomeCard>
        </div>
      </S.HomeHeaderContent>

      <img src={CoffeeHome} alt="" />
    </S.HomeHeader>
  )
}
