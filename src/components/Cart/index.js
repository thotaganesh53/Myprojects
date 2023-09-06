import {Component} from 'react'

import {Link} from 'react-router-dom'

import {addCartClick} from '../ProductCard'

import Header from '../Header'
import './index.css'

const ShoppingCart = props => {
  const {detailsOrder, removeTheCart} = props
  const {name, cost, id} = detailsOrder

  const removeElement = () => {
    removeTheCart(id)
  }

  return (
    <li className="list-items-cart">
      <p className="cart-title1">{name}</p>
      <p className="cart-title2">{cost}</p>
      <button type="button" className="button-cart" onClick={removeElement}>
        delete
      </button>
    </li>
  )
}

class Cart extends Component {
  state = {
    orderItems: addCartClick(),
    totalBill: 0,
    totalCartProduct: addCartClick().length,
  }

  removeTheCart = id => {
    const {orderItems} = this.state
    let {totalBill} = this.state
    totalBill = this.billAmount()

    const result = orderItems.filter(eachItem => eachItem.id !== id)

    this.setState({orderItems: result, totalCartProduct: result.length})
  }

  billAmount = () => {
    const {orderItems} = this.state
    let {totalBill} = this.state
    orderItems.forEach(element => {
      totalBill += element.cost
    })

    return totalBill
  }

  render() {
    const {orderItems, totalCartProduct} = this.state
    console.log(orderItems)

    return (
      <div className="cart-items-box">
        <div>
          <Header />
        </div>
        <div className="cart-card-container-box">
          <div className="cart-container-side1">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
                alt="cart"
                className="cart-img"
              />
            </div>
          </div>
          <div className="cart-container-side2">
            {totalCartProduct > 0 && (
              <div className="cart-container">
                <div className="cart-card-container">
                  <div className="cart-total">
                    <h1 className="heading-cart">My Order</h1>
                    <p className="total-product">
                      Total Product:{totalCartProduct}
                    </p>
                  </div>
                  <hr />
                  <div className="card-tag">
                    <p className="product-name">Product Name</p>
                    <p className="product-name">Price</p>
                    <p className="product-name">Remove</p>
                  </div>
                  <ul className="unorder-list">
                    {orderItems.map(eachItem => (
                      <ShoppingCart
                        key={eachItem.id}
                        detailsOrder={eachItem}
                        removeTheCart={this.removeTheCart}
                      />
                    ))}
                  </ul>
                  <hr />
                  <div className="total-product">
                    <p className="total-amount">Total:{this.billAmount()}</p>
                  </div>
                  <hr />
                  <div className="button-box">
                    <Link to="/order">
                      <button
                        type="button"
                        onClick={this.orderNowProducts}
                        className="order-now"
                      >
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
