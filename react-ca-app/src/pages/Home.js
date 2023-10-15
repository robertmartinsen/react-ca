import React, { useEffect, useState } from "react"
import "./Home.module.scss"
import classes from "./Home.module.scss"
import { Link } from "react-router-dom"

function HomePage() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setProducts(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="container pt-4">
      <h1 className="text-center pb-2">Products</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="form-control"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`col-md-6 col-lg-4 mb-4 ${classes["product-card"]}`}
          >
            <div className="card">
              <img
                src={product.imageUrl}
                className="card-img-top product-image"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className={classes.cardbox}>
                <p className="card-text">{product.description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {product.discountedPrice ? (
                    <p className="card-text">
                      {product.price !== product.discountedPrice ? (
                        <>
                          <span className="before-price">
                            <s>${product.price.toFixed(2)}</s>
                          </span>{" "}
                          <span>
                            ${product.discountedPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-dark">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </p>
                  ) : (
                    <p className="card-text">
                      <span className="text-dark">
                        ${product.price.toFixed(2)}
                      </span>
                    </p>
                  )}
                  <Link
                    to={`/ProductPage/${product.id}`}
                    className="btn btn-secondary"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
