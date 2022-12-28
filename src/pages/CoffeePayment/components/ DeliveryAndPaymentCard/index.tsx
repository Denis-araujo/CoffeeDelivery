import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Storefront,
} from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'
import * as S from './styles'

export function DeliveryAndPaymentCard() {
  const { register, control } = useFormContext()

  return (
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.AddressDataSubTitle>
            </div>
          </div>

          <Controller
            control={control}
            name="payment"
            render={({ field }) => {
              return (
                <S.ListPayment
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <S.PaymentMethod type="button" value="creditCard">
                    <CreditCard />
                    Cartao de crédito
                  </S.PaymentMethod>
                  <S.PaymentMethod type="button" value="debitCard">
                    <Storefront />
                    Cartão de débito
                  </S.PaymentMethod>
                  <S.PaymentMethod type="button" value="cash">
                    <Money />
                    Dinheiro
                  </S.PaymentMethod>
                </S.ListPayment>
              )
            }}
          />
        </S.CardPayment>
      </div>
    </S.CardRequest>
  )
}
