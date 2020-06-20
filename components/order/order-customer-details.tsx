import React, { Component } from "react";

class Customer extends Component {
  render() {
    return (
      <>
        <section className="customer-info">
          <span>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
          </span>
          <span>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" />
          </span>
        </section>
      </>
    );
  }
}

export default Customer;
