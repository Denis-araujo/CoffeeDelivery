import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { DeliveryAddressContext } from '../../context/DeliveryAddressContext'

import deliveryman from '../../assets/deliveryman.svg'
import * as S from './styles'

export function RequestMadeSuccessfully() {
  const { deliveryAddress } = useContext(DeliveryAddressContext)

  return (
    <S.RequestMadeSuccessfullyContent>
      <div>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </S.SubTitle>

        <S.AddressCard>
          <S.QualityCard backgroundIconColor="purple">
            <MapPin weight="fill" size={13} />
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {deliveryAddress?.street}, {deliveryAddress?.numberStreet}
                </strong>
              </span>
              <span>
                {deliveryAddress?.district} - {deliveryAddress?.city},{' '}
                {deliveryAddress?.UF}
              </span>
            </div>
          </S.QualityCard>
          <S.QualityCard backgroundIconColor="yellow">
            <Timer weight="fill" size={13} />
            <div>
              <span>Previsão de entrega</span>
              <strong>20min - 30min</strong>
            </div>
          </S.QualityCard>
          <S.QualityCard backgroundIconColor="yellowDark">
            <CurrencyDollar weight="fill" size={13} />
            <div>
              <span>Pagamento na entrega</span>
              <strong>{deliveryAddress?.payment}</strong>
            </div>
          </S.QualityCard>
        </S.AddressCard>
      </div>

      <img src={deliveryman} alt="" />
    </S.RequestMadeSuccessfullyContent>
  )
}
