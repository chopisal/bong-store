import { withRouter } from "next/router";
import ProductPresent from "./productPresent";

class ProductContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { id }
    } = props;
    return { id };
  }
  render() {
    return <ProductPresent />;
  }
}

export default withRouter(ProductContainer);
