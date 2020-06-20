import React, { Component } from "react";

class Logistics extends Component {
  render() {
    return (
      <>
        <section className="logistics-info">
          <span>
            <label htmlFor="order-date">Order Date: </label>
            <input type="date" name="order-date" />
          </span>
          <span>
            <label htmlFor="order-time">Time</label>
            <input type="time" name="order-time" />
          </span>
        </section>
      </>
    );
  }
}

export default Logistics;
