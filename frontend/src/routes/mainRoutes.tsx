import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
