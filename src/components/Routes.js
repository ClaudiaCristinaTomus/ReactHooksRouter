import React from 'react'
import Products from './Products';
import {Route, Switch} from "react-router-dom";
import SignUp from './SignUp';
import Cart from './Cart';

const Routes = ({productItems,cartItems,handleAddProduct}) => {
  return (
    <div>
        <Switch>
            <Route path="/" exact>
                <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path="/signup" exact>
              <SignUp/>
            </Route>
            <Route path="/cart" exact>
              <Cart cartItems={cartItems}  handleAddProduct={handleAddProduct}/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes