import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutSuccess() {


  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h2>Order Successful!</h2>
          <p>Your order has been successfully placed.</p>
          <Link to="/">Back to Store</Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;

  