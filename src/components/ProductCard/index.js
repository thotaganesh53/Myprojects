import {v4} from 'uuid'

import './index.css'

const listCart = []

export const addCartClick = () => listCart

export const ProductCard = props => {
  const {productData} = props
  const {title, brand, imageUrl, rating, price} = productData

  const addItems = (name, cost) => {
    listCart.push({id: v4(), name, cost: parseInt(cost, 10)})
  }

  const addToCart = () => {
    addItems(title, price)
  }

  return (
    <li className="product-item" onClick={addToCart}>
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}
