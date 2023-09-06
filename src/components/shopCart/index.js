import {Component} from 'react'

import './index.css'

class OrderCartItems extends Component {
  state = {
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    customerCity: '',
    customerState: '',
    customerPincode: '',
    orderNow: false,
    isActive: false,
  }

  onOrderCatProducts = event => {
    event.preventDefault()
    this.setState({orderNow: true})
  }

  onName = event => {
    console.log(event.target.value)
    this.setState({customerName: event.target.value})
  }

  backToCart = () => {
    const {history} = this.props
    history.push('/products')
  }

  confirmToOrder = () => {
    this.setState({isActive: true})
  }

  onPhone = event => {
    console.log(event.target.value)
    this.setState({customerPhone: event.target.value})
  }

  onAddress = event => {
    console.log(event.target.value)
    this.setState({customerAddress: event.target.value})
  }

  onCity = event => {
    console.log(event.target.value)
    this.setState({customerCity: event.target.value})
  }

  onState = event => {
    console.log(event.target.value)
    this.setState({customerState: event.target.value})
  }

  backToHome = () => {
    const {history} = this.props
    history.push('/')
  }

  onPinCode = event => {
    console.log(event.target.value)
    this.setState({customerPincode: event.target.value})
  }

  orderCustomer = () => (
    <div className="container-order-now-placed">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-image"
        />
        <h1 className="heading-order-customer">
          Thanking For Shopping
          <br /> Your Order Successfully Placed.
        </h1>
        <p className="order-customer-description">We Will Update very Soon</p>
        <div className="cutomer-button">
          <button
            type="button"
            onClick={this.backToHome}
            className="button-order-customer"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  )

  render() {
    const {
      customerName,
      customerPhone,
      customerAddress,
      customerCity,
      customerState,
      customerPincode,
      orderNow,
      isActive,
    } = this.state

    if (isActive) {
      return this.orderCustomer()
    }
    return (
      <div className="container-address">
        {orderNow ? (
          <div className="delivery-container-carted">
            <h1 className="heading-delivery-carted">Your Delivery Address</h1>
            <div>
              <p className="customer-name">{customerName}</p>
              <p className="customer-name">{customerPhone}</p>
              <p className="customer-name">{customerAddress}</p>
              <p className="customer-name">{customerCity}</p>
              <p className="customer-name">{customerState}</p>
              <p className="customer-name">{customerPincode}</p>
            </div>
            <div className="submit-cart-boxer">
              <button
                type="button"
                onClick={this.backToCart}
                className="button-confirm"
              >
                Back Cart
              </button>
              <button
                type="button"
                onClick={this.confirmToOrder}
                className="button-confirm"
              >
                Confirm
              </button>
            </div>
          </div>
        ) : (
          <div className="container-box">
            <h1 className="header-address">Delivery Address</h1>
            <form onSubmit={this.onOrderCatProducts}>
              <div className="address-name">
                <label className="label-name" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={this.onName}
                  placeholder="Your Name"
                  required
                  maxLength="250"
                  className="text-box"
                  id="full-name"
                />
              </div>
              <div className="address-name">
                <label className="label-name" htmlFor="phone-no">
                  Phone No
                </label>
                <input
                  placeholder="Your Phone No"
                  required
                  type="text"
                  onChange={this.onPhone}
                  maxLength="10"
                  className="text-box"
                  id="phone-no"
                />
              </div>
              <div className="address-name">
                <label className="label-name" htmlFor="address">
                  Address
                </label>
                <textarea
                  rows="4"
                  cols="45"
                  onChange={this.onAddress}
                  placeholder="Your Address"
                  required
                  className="text-box-name"
                  id="address"
                >
                  {}
                </textarea>
              </div>
              <div className="address-name">
                <label className="label-name" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Your City"
                  required
                  onChange={this.onCity}
                  maxLength="250"
                  className="text-box"
                  id="city"
                />
              </div>
              <div className="address-name">
                <label className="label-name" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Your State"
                  required
                  onChange={this.onState}
                  maxLength="250"
                  className="text-box"
                  id="state"
                />
              </div>
              <div className="address-name">
                <label className="label-name" htmlFor="pin-code">
                  Pin Code
                </label>
                <input
                  className="text-box"
                  placeholder="Your Pin code"
                  required
                  onChange={this.onPinCode}
                  maxLength="6"
                  id="pin-code"
                />
              </div>
              <div className="button-container-1">
                <button type="submit" className="button-submit-order">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default OrderCartItems
