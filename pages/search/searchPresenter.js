import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout, Input } from "antd";
import ProductCard from "../../components/ProductCard";
import CartButton from "../../components/CartButton";
const { Content } = Layout;

export default ({ data, updateSearchTerm, searchTerm }) => (
  <>
    <Head>
      <title>Search | Bong Store</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm === "" ? "Search" : `Searching by ${searchTerm}`}</h4>
      }
      rightColumn={<CartButton />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <Input
        onChange={updateSearchTerm}
        placeholder={"Search by name"}
        value={searchTerm}
      />
    </Content>
  </>
);
