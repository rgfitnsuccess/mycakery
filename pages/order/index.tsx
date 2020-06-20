import Layout from "../../components/layout";
import { Component } from "react";
import Head from "next/head";
import Order from "../../components/order/order-form";
import UserInfo from "../../components/order/order-customer-details";
import Logistics from "../../components/order/order-logistic-details";

class OrderForm extends Component {
  render() {
    const title = "Contact Info";
    return (
      <Layout home>
        <Head key="1">
          <title>{title}</title>
        </Head>
        <div id="container" className="contact">
          <div>
            <div>
              <UserInfo></UserInfo>
              <Logistics></Logistics>
              <Order></Order>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default OrderForm;
