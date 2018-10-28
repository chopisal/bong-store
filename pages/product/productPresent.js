export default () => <h1>hello</h1>;
import Head from "next/head";
import { Button as AntButton } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default ({data}) => (
  <>
    <Head>
      <title>{data.product.name} | Bong Store </title>
    </Head>
    <Header
      centerColumn={<h4>Product</h4>}
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <div className={"product"}>
      <img src={data.product.photo.url} />
      <div>
        <h2>{data.product.name}</h2>
        <h3>{data.product.detail}</h3>
        <h4>{data.product.description}</h4>
        <AntButton type="primary">
          Add to cart(${data.product.price})
        </AntButton>
      </div>
    </div>
  </>
);