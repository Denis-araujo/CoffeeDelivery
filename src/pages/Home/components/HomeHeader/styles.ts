import styled from 'styled-components'

export const HomeHeader = styled.div`
  display: flex;
  margin-top: 8.5rem;
  justify-content: space-between;
`

export const HomeHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const HomeHeaderContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    display: flex;
    flex-direction: column;
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    width: 38rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubtitle};
    width: 33rem;
  }
`

export const HomeCard = styled.div`
  display: flex;
  gap: 1.25rem;
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
  margin-bottom: 1.25rem;

  svg {
    padding: 0.5rem;
    background-color: ${(props) =>
      props.theme[BACKGROUND_ICON_COLORS[props.backgroundIconColor]]};
    color: ${(props) => props.theme.white};
    border-radius: 9999px;
    height: 2rem;
    width: 2rem;
  }
`
