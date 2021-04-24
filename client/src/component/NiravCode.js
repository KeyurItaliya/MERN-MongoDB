import React, { useState, useEffect } from 'react'
import { unstable_createPortal } from 'react-dom';
// import './App.css';

const prod = 'products';
const carts = 'carts';

const App = () => {
  const [cart, setCart] = useState([]);
  const [qty, setqty] = useState(1);
  const [page, setPage] = useState(prod);
  const [total, setTotal] = useState()
  const [totalItemCount, setTotalItemCount] = useState(6);

  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: 'Iphone 8+',
      cost: 79999,
      qty: 1,
      image: 'https://cdn.pixabay.com/photo/2019/10/21/17/47/photo-4566712__340.jpg'
    },
    {
      id: 2,
      product_name: 'DSLR',
      cost: 34000,
      qty: 1,
      image: 'https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119__340.jpg'
    },
    {
      id: 3,
      product_name: 'Smart Tv',
      cost: 48000,
      qty: 1,
      image: 'https://media.istockphoto.com/photos/smart-tv-set-mockup-standing-on-wooden-console-picture-id1021563284?b=1&k=6&m=1021563284&s=170667a&w=0&h=Fb80UsahphQy4Y35svqkK-b95-FN9KgBecbTmvsoOls='
    },
    {
      id: 4,
      product_name: 'Smart Watch',
      cost: 16000,
      qty: 1,
      image: 'https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639__340.jpg'
    },
    {
      id: 5,
      product_name: 'Shoes',
      cost: 4000,
      qty: 1,
      image: 'https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925__340.jpg'
    }
  ])

  const addtocart = (product) => {
    console.log("added to cart")
    setCart([...cart, { ...product }])
    
    const totalPrice = cart.reduce((acc, curr)=>{ //calculate total
      let cur =curr.cost //parse string to integer(cost)
        return acc + Number(cur); 
      }, product.cost)
    console.log("total:", totalPrice);

  }

  useEffect(() => {
    TotalCost()
    calculateTotal()
  }, [cart.qty])

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
              <img src={product.image} alt="not loaded" /><br />
              <h2>Product Name : {product.product_name}</h2>
              <h3>Product Cost : {product.cost} Rupees.</h3>
              <button onClick={() => { addtocart(product) }} style={{ backgroundColor: 'yellowgreen' }}>Add to Cart.</button>

            </div>)
          })
        }
      </div>
    </React.Fragment>
  )

  const getTotalCost = () => {
    var totalCost = 0;
    for (var key = 0; key < cart.length; key++) {
      totalCost += cart[key].cost;
    };
    return totalCost;
  }

  const calculateTotal = () => {
    const totalItem = cart.reduce((total, item) => {
      return item.qty * item.cost;
    }, 1);
    setTotalItemCount(totalItem);
  };

  const TotalCost = () => cart.map((items) => {
    let total = items.qty * items.cost;
    setTotal(total)
  })

  const upsto = (index) => {
      const newItems = [...cart];
      console.log("newItems ---->", newItems[index])
	    newItems[index].qty++;
	    setCart(newItems);
      calculateTotal();
      TotalCost()
  }

  const downto = (index) => {
    const newItems = [...cart];
    newItems[index].qty--;
    setCart(newItems);
    calculateTotal();
    TotalCost()
  }
  
  const rendercart = () => {

    return(
    <React.Fragment>
      <center><h1>Cart Items...</h1>
      </center>
      <div className="carts">
        {
          cart.map((carts, index) => {
            return (<div className="carts" key={index}>
              <img src = {carts.image} alt="not loaded" /><br />
              <h2>Product Name : {carts.product_name}</h2>
              <h3>Product Cost : {carts.cost}</h3>
              <h3 >Total Products Cost : {totalItemCount}</h3>
              <h4>Quantity : {carts.qty}<button onClick={() => {downto(index) }}>-</button><button onClick={() => {upsto(index) }}>+</button></h4>
              <button name="butt" onClick={() => { removeitem(carts) }} style={{ backgroundColor: 'goldenrod' }}>Remove item.</button>
            </div>)
          })
        }
      </div>
      <h3>Total Cost : {total}</h3>
    </React.Fragment>
  )}

  const nav = (newPage) => {
    setPage(newPage);
  }


  return (
    <React.Fragment>
      <header className="row block center">
        <div><button onClick={() => nav(prod)} style={{ backgroundColor: 'lawngreen', color: 'white', borderRadius: '0.5rem' }} >Products.</button></div>
        <div><button onClick={() => nav(carts)} style={{ backgroundColor: 'lightsalmon', color: 'white', borderRadius: '0.5rem' }} >Cart({cart.length})</button></div>
      </header>
      { page === prod && renderproducts()}
      { page === carts && rendercart()}
    </React.Fragment >
  )
}


export default App;