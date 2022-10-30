import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CheckoutPage } from './pages/Checkout'
import { Home } from './pages/Home'
import { SuccessPurchasePage } from './pages/SuccessPurchase'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPurchasePage />} />
      </Route>
    </Routes>
  )
}
