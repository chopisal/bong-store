import Link from "next/link";
import { Col, Card, Icon } from "antd";
const { Meta } = Card;

export default ({ id, name, subtitle, photoUrl }) => (
  <Col span={4} style={{ marginBottom: "25px" }}>
    <Card
      hoverable
      actions={[
        <Link href={`/product?id=${id}`} as={`/product/${id}`}>
          <a>
            <Icon type="eye" theme="outlined" />
          </a>
        </Link>
      ]}
      cover={<img alt="example" src={photoUrl} height={"200px"} />}
    >
      <Meta title={name} description={subtitle} />
    </Card>
  </Col>
);
