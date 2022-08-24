import Image from "next/image";
import React from "react";
import { Product } from "../../models/data";
import styles from "./ProductCard.module.scss";
interface Props {
  product: Product;
}
const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        width={280}
        height={200}
        layout="responsive"
        alt="pastry"
      ></Image>
      <div className={styles.cardTitle}>
        <h1>{product.name}</h1>
      </div>
      <div className={styles.cardDesc}>
        <p>{product.description}</p>
      </div>
      <div className={styles.price}>
        <h1>${product.price}</h1>
      </div>
      <div className={styles.cardAction}>Add To Cart</div>
    </div>
  );
};

export default ProductCard;
