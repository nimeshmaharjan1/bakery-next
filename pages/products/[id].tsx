import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";

const Product = () => {
  const image = "/productOne.jpg";
  return (
    <Layout>
      <Row className="single-product">
        <Col className="left-side" lg={14} xs={24}>
          <Image
            src={image}
            layout="fill"
            alt="pastry"
            objectFit="cover"
          ></Image>
        </Col>
        <Col className="right-side" lg={10} xs={24}></Col>
      </Row>
    </Layout>
  );
};

export default Product;
