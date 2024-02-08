import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Tasks } from '../pages/Tasks';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/tasks' element={<Tasks />} />
      
    </Routes>
  );
};
