import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../actions/cartRemove"
import { Link } from "react-router-dom"
import { clearCart } from "../actions/cartClear"

function CartPage() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const calculateTotal = () => {
    const total = cart.items.reduce(
      (total, item) =>
        total + (item.discountedPrice ? item.discountedPrice : item.price),
      0
    )
    return total.toFixed(2)
  }

  const handleConfirmPurchase = () => {
    dispatch(clearCart())
  }

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cart.items.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {item.discountedPrice !== item.price ? (
                      <>
                        <p className="card-text">
                          <span
                            className="original-price"
                            style={{ textDecoration: "line-through", color:"red" }}
                          >
                            ${item.price.toFixed(2)}
                          </span>{" "}
                          ${item.discountedPrice.toFixed(2)}
                        </p>
                      </>
                    ) : (
                      <p className="card-text">${item.price.toFixed(2)}</p>
                    )}

                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-end pb-4">
            <h4>Total: ${calculateTotal()}</h4>
            <Link to="/checkoutsuccess">
              <button
                className="btn btn-primary"
                onClick={handleConfirmPurchase}
              >
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
