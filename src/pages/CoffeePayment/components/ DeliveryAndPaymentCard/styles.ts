import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CardRequest = styled.div`
  margin-right: 2rem;
`

export const AddressData = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;

  width: 41.5rem;
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
    /* width: 100%; */
    display: flex;

    div + div {
      margin-left: 1rem;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.baseInput};

  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;
  padding-left: 0.75rem;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: 2.6rem;
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
`

export const InputAddress = styled.input``

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

export const ListPayment = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const PaymentMethod = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme.baseButton};
  border: none;
  border-radius: 4px;

  width: 11rem;
  height: 3rem;

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    cursor: pointer;
    background-color: ${(props) => props.theme.baseHover};
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
