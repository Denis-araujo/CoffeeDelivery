import styled from 'styled-components'

export const HomeBody = styled.div`
  margin-top: 6rem;
`

export const TitleCoffe = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme.baseTitle};
`

export const CoffeeList = styled.div`
  display: flex;
  margin-top: 3.3rem;
  margin-bottom: 5rem;
  gap: 2rem;
`

export const Coffee = styled.div`
  width: 16rem;
  height: 19rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 23px;
  }
`

export const CoffeeType = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  border-radius: 9999px;
  line-height: 130%;
  height: 1.3rem;
  width: 5rem;
`

export const CoffeeTitle = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseSubtitle};
`

export const CoffeeDescription = styled.span`
  text-align: center;
  margin: 0 1.25rem;
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme.baseLabel};
`

export const ContainerPriceAndAcquisition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  margin-top: 2rem;
  width: 100%;
`

export const PriceCoffee = styled.span`
  font-weight: 800;
  font-size: 1.3rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseText};
`

export const QuantityCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.baseButton};
    border-radius: 6px;
    height: 2.5rem;
    gap: 0.5rem;
    width: 4.5rem;

    button {
      border: 0;
      background-color: transparent;
      color: ${(props) => props.theme.purpleDark};

      font-size: 1.5rem;
    }
  }

  svg {
    padding: 0.5rem;
    background-color: ${(props) => props.theme.purpleDark};
    border-radius: 6px;
    height: 2.5rem;
    width: 2rem;
    color: ${(props) => props.theme.white};
  }
`
