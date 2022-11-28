import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as actions from './redux/actions';

import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductPage from './pages/ProductPage/ProductPage';
import Cart from './pages/Cart/Cart';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';
import Logout from './pages/Auth/Logout/Logout';
import NotFound from './pages/NotFound/NotFound';
import Categories from './pages/Categories/Categories';
import CreateProduct from './pages/CreateProduct/CreateProduct';

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(({ user }) => user.info.isLogged);
  const isAdmin = useSelector(({ user }) => user.info.isAdmin);

  React.useEffect(() => {
    dispatch(actions.getUser());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/detail/:id' component={ProductPage} />
        <Route exact path='/cart' component={Cart} />

        <Route exact path='/categories' component={isAdmin ? Categories : NotFound} />
        <Route exact path='/create_product' component={isAdmin ? CreateProduct : NotFound} />

        <Route exact path='/signup' component={isLogged ? NotFound : SignUp} />
        <Route exact path='/login' component={isLogged ? NotFound : Login} />
        <Route exact path='/logout' component={Logout} />

        <Route path='*' exact component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
