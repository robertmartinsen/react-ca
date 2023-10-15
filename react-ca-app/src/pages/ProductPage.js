import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartAdd"
import "./ProductPage.module.scss"

function ProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (!cart.items.some((item) => item.id === product.id)) {
      dispatch(addToCart(product))
    } else {
      alert("Product is already in the cart!")
    }
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://api.noroff.dev/api/v1/online-shop/${productId}`
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setProduct(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            className="img-fluid"
            alt={product.title}
          />
        </div>
        <div className="col-md-6 pt-2">
          <h2>{product.title}</h2>
          {product.discountedPrice !== product.price ? (
            <>
              <p>
                <span className="original-price">
                  <s>${product.price.toFixed(2)}</s>
                </span>
              </p>
              <p>
                <span className="discount-info">
                  Discount: -$
                  {(product.price - product.discountedPrice).toFixed(2)}
                </span>
              </p>
              <p className="discount-price">
                ${product.discountedPrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p>${product.price.toFixed(2)}</p>
          )}
          <p>{product.description}</p>
          {cart.items.some((item) => item.id === product.id) ? (
            <button className="btn btn-primary" disabled>
              Product in Cart
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
      {product.reviews.length > 0 && (
        <div className="row mt-4">
          <div className="col">
            <h3>Reviews</h3>
            <hr />
            <ul className="shadow p-3">
              {product.reviews.map((review) => (
                <li key={review.id}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>{review.username}</strong>
                    </div>
                    <div className="stars">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index}>★</span>
                      ))}
                    </div>
                  </div>
                  <p>{review.description}</p>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
