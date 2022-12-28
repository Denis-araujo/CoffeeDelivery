import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeContextProvider } from './context/CoffeeContext'
import { DeliveryAddressProvider } from './context/DeliveryAddressContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <DeliveryAddressProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </DeliveryAddressProvider>
      </CoffeeContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
