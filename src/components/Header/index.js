import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {PiShoppingBagOpenBold} from 'react-icons/pi'

import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">
                <p className="home-text">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                <p className="home-text">Products</p>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link">
                <p className="home-text">
                  Cart
                  <sub>
                    <PiShoppingBagOpenBold className="logo-shop" />
                  </sub>
                </p>
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
          <button
            type="button"
            className="logout-mobile-btn"
            onClick={this.onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="logout icon"
              className="logout-icon"
            />
          </button>
        </div>
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list-mobile">
            <Link to="/">
              <li className="nav-menu-item-mobile">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                  alt="nav home"
                  className="nav-bar-image"
                />
              </li>
            </Link>
            <Link to="/products">
              <li className="nav-menu-item-mobile">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                  alt="nav products"
                  className="nav-bar-image"
                />
              </li>
            </Link>
            <Link to="/cart">
              <li className="nav-menu-item-mobile">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                  alt="nav cart"
                  className="nav-bar-image"
                />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
export default withRouter(Header)
