import React from "react";
import Menu from "./Menu/Menu";
import Home from "../pages/index";
import { Col, Row } from "antd";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="container" style={{ padding: "1rem 2.7rem 0 2.7rem" }}>
        <Row justify="space-between">
          <Col>
            <Link href="/" passHref>
              <h1>Pâtisserie</h1>
            </Link>
          </Col>
          <Col>
            <Row justify="end" align="middle" gutter={34}>
              <Col>
                <p>About</p>
              </Col>
              <Col>
                <p>Contact</p>
              </Col>
              <Col>
                <p>Cart</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </nav>
      {children}
    </>
  );
};

export default Layout;
