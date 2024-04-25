import * as React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

import HomePage from './components/access/access.tsx'
import AdminPage from './components/admin/adminPage.tsx'
import UserPage from './components/user/userPage.tsx'
import AddOrderPage from './components/addPage/addOrderPage.tsx'
import EditOrderPage from './components/editPage/editOrderPage.tsx'
import User from './components/user/userPage.tsx'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/add" element={<AddOrderPage />} />
          <Route path="/edit" element={<EditOrderPage />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App