import React, { useState } from 'react'
// import './App.css';

const prod = 'products';
const carts = 'carts';

const NiravCode = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(prod);

  const [products] = useState([
    {
      id: 1,
      product_name: 'Iphone',
      cost: 15,
      image: require('./image/test.jpg')
    },
    {
      id: 2,
      product_name: 'DSLR',
      cost: 15,
      image: require('./image/test.jpg')
    },
    {
      id: 3,
      product_name: 'Smart Tv',
      cost: 15,
      image: require('./image/test.jpg')
    },
    {
      id: 4,
      product_name: 'Smart Watch',
      cost: 15,
      image: require('./image/test.jpg')
    },
    {
      id: 5,
      product_name: 'Shoes',
      cost: 40,
      image: require('./image/img1.jpeg')
    }
  ])

  const addtocart = (product) => {
    console.log("added to cart")
    setCart([...cart, { ...product }])
  }

const getTotalCost = () => {
  var totalCost = 0;
  for (var key=0; key < products.length; key++) {
    totalCost += products[key].cost;
  };
  return totalCost;
}

  const removeitem = (deleteitems) => {
    setCart(
      cart.filter(product => product !== deleteitems)
    )
  }

  const renderproducts = () => (
    <React.Fragment>
      <center><h1>Available Products...</h1></center>
      <div className="products">
        {
          products.map((product, index) => {
            return (<div className="product" key={index}>
              <h2>{product.product_name}</h2>
              <h3>{product.cost}</h3> 
              <img src={product.image} width="200px" alt="not loaded" /><br />
              <button onClick={() => { addtocart(product) }}>Add to Cart.</button>

            </div>)
          })
        }
      </div>
    </React.Fragment>
  )

  const rendercart = () => (
    <React.Fragment>
      <center><h1>Cart Items...</h1></center>
      <div className="products">
        {
          cart.map((product, index) => {
            return (<div className="product" key={index}>
              <h2>{product.product_name}</h2>
              <h3>{product.cost}</h3>
              <img src={product.image} alt="not loaded" /><br />
              <button onClick={() => { removeitem(product) }}>Remove item.</button>
            </div>)
          })
        }
      </div>
    </React.Fragment>
  )

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }


  return (
    <React.Fragment>
      <center>
      <div className = "bts"><button onClick={() => navigateTo(carts)} id = "1">Go To Cart. = {cart.length}</button>
        <button onClick={() => navigateTo(carts)} id = "2">Products.</button></div>
      </center>
      
      {page === prod && renderproducts()}
      {page === carts && rendercart()}
    </React.Fragment>
  )
}


export default NiravCode;