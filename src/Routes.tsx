import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { HomePage } from './pages/Home';
import { CheckoutPage } from './pages/OrderCheckout';
import { SuccessPage } from './pages/OrderSuccess';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/OrderCheckout" element={<CheckoutPage />} />
        <Route path="/OrderSuccess" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
};
