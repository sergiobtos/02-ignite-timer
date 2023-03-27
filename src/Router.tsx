/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout.tsx'
import { HistoryPage } from './pages/History/Index'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryPage />} />
      </Route>
    </Routes>
  )
}
