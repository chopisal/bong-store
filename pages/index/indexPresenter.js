import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout, Row } from "antd";
import ProductCard from "../../components/ProductCard";
const { Content } = Layout;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | Bong Store</title>
    </Head>
    <Header
      centerColumn={<h4>Bong Store</h4>}
      rightColumn={
        <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
      }
      leftColumn={<Button href="/search" text="Search" btnIcon={"search"} />}
    />
    <Content style={{ padding: "0 50px" }}>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          width: "100%"
        }}
      >
        {data &&
          data.categories &&
          data.categories.map(category => (
            <Button
              key={category.id}
              href={`/category?name=${category.name.toLowerCase()}`}
              hrefAs={`/category/${category.name.toLowerCase()}`}
              text={category.name}
            />
          ))}
      </div>
      <Row gutter={25} style={{ paddingTop: "50px" }}>
        {data && data.onSale && data.onSale.length !== 0 && <h2>On Sale</h2>}
        {data &&
          data.onSale &&
          data.onSale.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.detail}
              price={product.price}
              photoUrl={product.photo.url}
            />
          ))}
      </Row>
    </Content>
  </>
);