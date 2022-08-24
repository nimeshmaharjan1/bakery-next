import React, { useState } from "react";
import { useDelayUnmount } from "../../hooks/useDelayUnmount";
import ProductCard from "../../components/products/ProductCard";
import { Col, Row } from "antd";
import Layout from "../../components/Layout";
import { products } from "../../models/data";
export default function Products() {
  return (
    <Layout>
      <section className="products | container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </section>
    </Layout>
  );
}
