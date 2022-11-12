import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../../cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const [products , setProducts] = useState([])


const [cart, setCart] =useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));

    },[]);


    //for lod for localstorage//last stage
   useEffect(() =>{
const storedcart = getStoredCart();
const savedcart = [];

for(const id in storedcart){
    const addedproduct = products.find(product => product.id === id)
    if(addedproduct){
        const quantity = storedcart[id];
        addedproduct.quantity =quantity;
        savedcart.push(addedproduct);

    }
    setCart(savedcart);
}

        
   },[products])

    //[products]-depenancy-if changes then call products 


    const handleaddclick =(product) =>{
        //copy from array//create new dom
        
       // console.log(product);
        //cart.push(product)
           

        const newcart = [...cart, product];
        setCart(newcart);

        addToDb(product.id)
      }

    return (
        <div className='shop-container'>
            <div className=" products-container">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    handleaddclick = {handleaddclick}
                    
                    ></Product>)
                }
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;

