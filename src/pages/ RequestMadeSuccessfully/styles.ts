import styled from 'styled-components'

export const RequestMadeSuccessfullyContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;
`

export const Title = styled.span`
  display: block;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme.yellowDark};
`

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseSubtitle};
`

export const AddressCard = styled.div`
  width: 526px;
  height: 270px;
  background: #fff;
  border-radius: 6px 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem;
  margin-top: 2.5rem;
  justify-content: center;
  box-sizing: border-box;

  ::before {
    border-radius: 6px 36px;
    content: '';
    background-image: linear-gradient(#dbac2c, #8047f8);
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    position: absolute;
    z-index: -1;
  }
`

const BACKGROUND_ICON_COLORS = {
  yellowDark: 'yellowDark',
  baseText: 'baseText',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface QualityCardProps {
  backgroundIconColor: keyof typeof BACKGROUND_ICON_COLORS
}

export const QualityCard = styled.span<QualityCardProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.baseText};
  margin-bottom: 2rem;

  svg {
    padding: 0.5rem;
    background-color: ${(props) =>
      props.theme[BACKGROUND_ICON_COLORS[props.backgroundIconColor]]};
    color: ${(props) => props.theme.white};
    border-radius: 9999px;
    height: 2rem;
    width: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`
