import styled from 'styled-components'

export const FormPayment = styled.form`
  display: flex;
  /*   width: 100vw;
  height: 100vh; */
`

export const CardRequest = styled.div`
  margin-right: 2rem;
`

export const AddressData = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;

  width: 41.5rem;
  height: 23.25rem;
  padding: 2.5rem;
  margin-top: 0.9rem;
  margin-bottom: 0.75rem;

  & > div {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme.yellowDark};
    }
  }
`

export const AddressDataTitle = styled.span`
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseSubtitle};
`

export const AddressDataSubTitle = styled.span`
  font-weight: 700;
  font-size: 0.876rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseText};
`

export const ListInputAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    width: 100%;
    display: flex;

    input + input {
      margin-left: 1rem;
    }
  }
`

export const InputAddress = styled.input`
  background-color: ${(props) => props.theme.baseInput};
  /* opacity: 50%; */

  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;
  padding-left: 0.75rem;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: 2.6rem;
`

export const CardPayment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;

  width: 41.5rem;
  height: 13rem;
  padding: 2.5rem;

  & > div {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const ListPayment = styled.div`
  display: flex;
`

interface PaymentMethodProps {
  active: boolean
}

export const PaymentMethod = styled.button<PaymentMethodProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.active ? props.theme.purpleLight : props.theme.baseInput};

  border: 1px solid
    ${(props) => (props.active ? props.theme.purple : props.theme.baseButton)};
  border-radius: 4px;

  width: 11rem;
  height: 3rem;

  :hover {
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CardProductsAndBuy = styled.div`
  width: 28rem;
  margin-top: 0.9rem;
  margin-bottom: 1rem;
  padding: 2.5rem;

  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;
`

export const CardProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CardProduct = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
`

export const InformationCard = styled.div`
  display: flex;
  gap: 1rem;
`

export const ImgCoffee = styled.img`
  width: 4rem;
  height: 4rem;
`

export const TitleCoffee = styled.span`
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
`

export const PriceCoffee = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseText};
`

export const QuantityCoffeeAndRemove = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
`

export const QuantityCoffee = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  height: 2.5rem;
  width: 4.5rem;

  button {
    border: 0;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    color: ${(props) => props.theme.purpleDark};

    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export const ButtonRemoverCoffee = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.baseButton};
  border: 0;
  border-radius: 6px;
  width: 6rem;
  color: ${(props) => props.theme.baseText};

  :hover {
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme.purpleDark};
  }
`

export const CardPrices = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const PriceTotal = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseSubtitle};
`

export const ButtonConfirmRequest = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border-radius: 6px;
  border: 0;
  height: 2.8rem;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`
