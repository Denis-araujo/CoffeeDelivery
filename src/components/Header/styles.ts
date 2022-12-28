import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`

export const HeaderContent = styled.div`
  display: flex;

  gap: 0.8rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.5rem;
    background-color: ${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.purpleDark};
    border-radius: 6px;
    height: 2.5rem;

    svg {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`

export const HeaderNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  a {
    padding: 0.5rem;
    background-color: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.purpleDark};
    border-radius: 6px;
    height: 2.5rem;
    text-decoration: none;

    span {
      position: relative;
      top: -18px;
      left: 18px;
      border-radius: 9999px;
      height: 20px;
      width: 20px;
    }
  }

  svg {
    color: ${(props) => props.theme.yellowDark};
    position: relative;
    top: -17px;
  }
`
