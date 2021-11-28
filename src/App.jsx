import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        {user ? (
          <Route path='/login' element={<Navigate to='/' />} />
        ) : (
          <Route path='/login' element={<Login />} />
        )}

        {user ? (
          <Route path='/register' element={<Navigate to='/' />} />
        ) : (
          <Route path='/register' element={<Register />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
