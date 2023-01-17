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
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

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
            <S.InputContainer>
              <S.Input
                width="12.5rem"
                type="number"
                placeholder="CEP"
                {...register('cep', { valueAsNumber: true })}
              />

              {errors.cep && <S.ErrorMessage>Informe um CEP!</S.ErrorMessage>}
            </S.InputContainer>
            <S.InputContainer>
              <S.Input type="text" placeholder="Rua" {...register('street')} />

              {errors.street && (
                <S.ErrorMessage>
                  {String(errors.street?.message)}
                </S.ErrorMessage>
              )}
            </S.InputContainer>
            <div>
              <S.InputContainer>
                <S.Input
                  width="12.5rem"
                  type="number"
                  placeholder="Número"
                  {...register('numberStreet', { valueAsNumber: true })}
                />

                {errors.numberStreet && (
                  <S.ErrorMessage>Informe o número da Rua</S.ErrorMessage>
                )}
              </S.InputContainer>
              <S.InputContainer>
                <S.Input
                  width="23rem"
                  type="text"
                  placeholder="Complemento(opcional)"
                  {...register('complement')}
                />

                {errors.complement && (
                  <S.ErrorMessage>
                    {String(errors.complement?.message)}
                  </S.ErrorMessage>
                )}
              </S.InputContainer>
            </div>
            <div>
              <S.InputContainer>
                <S.Input
                  width="12.5rem"
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                />

                {errors.district && (
                  <S.ErrorMessage>
                    {String(errors.district?.message)}
                  </S.ErrorMessage>
                )}
              </S.InputContainer>
              <S.InputContainer>
                <S.Input
                  width="17.25rem"
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />

                {errors.city && (
                  <S.ErrorMessage>
                    {String(errors.city?.message)}
                  </S.ErrorMessage>
                )}
              </S.InputContainer>
              <S.InputContainer>
                <S.Input
                  width="4.8rem"
                  type="text"
                  placeholder="UF"
                  {...register('UF')}
                />

                {errors.UF && (
                  <S.ErrorMessage>{String(errors.UF?.message)}</S.ErrorMessage>
                )}
              </S.InputContainer>
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
                  <div>
                    <S.PaymentMethod type="button" value="credito">
                      <CreditCard />
                      Cartao de crédito
                    </S.PaymentMethod>
                    <S.PaymentMethod type="button" value="debito">
                      <Storefront />
                      Cartão de débito
                    </S.PaymentMethod>
                    <S.PaymentMethod type="button" value="dinheiro">
                      <Money />
                      Dinheiro
                    </S.PaymentMethod>
                  </div>
                  {errors.payment && (
                    <S.ErrorMessage>
                      {String(errors.payment?.message)}
                    </S.ErrorMessage>
                  )}
                </S.ListPayment>
              )
            }}
          />
        </S.CardPayment>
      </div>
    </S.CardRequest>
  )
}
