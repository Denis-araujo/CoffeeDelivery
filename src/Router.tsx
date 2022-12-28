import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { RequestMadeSuccessfully } from './pages/ RequestMadeSuccessfully'
import { CoffeePayment } from './pages/CoffeePayment'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/coffeePayment" element={<CoffeePayment />} />
        <Route
          path="/RequestMadeSuccessfully"
          element={<RequestMadeSuccessfully />}
        />
      </Route>
    </Routes>
  )
}
