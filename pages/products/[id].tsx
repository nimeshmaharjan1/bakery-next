import { Col, Row } from "antd";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
export interface Product {
  name: string;
  category: string;
  images: Image[];
  description: string;
  price: string;
  veg: number;
  ingredients: string;
  contains: string;
  nutritionValues: NutritionValues;
  _id: string;
  __v: number;
}

export interface Image {
  src: string;
  _id: string;
}

export interface NutritionValues {
  servingSize: string;
  amountPerServing: AmountPerServing;
}

export interface AmountPerServing {
  calories: number;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  sodium: string;
  totalCarbohydrate: string;
  dietaryFiber: string;
  sugars: string;
  protein: string;
}
interface Props {
  product: Product;
}

const Product: NextPage<Props> = ({ product }) => {
  return (
    <Layout>
      <Row className="single-product">
        <Col className="left-side" lg={14} xs={24}>
          <Image
            src={product.images[0].src}
            layout="responsive"
            height={1200}
            width={1200}
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
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${context.params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};
