import { connect } from "react-redux";
import React, { Component } from "react";
import { setProduct } from "../reducers/productReducer";
import { Layout } from "antd";
import { Card } from "antd";
import { Button } from "antd";
import { IProduct } from "../models/product.model";
import "./Product.css";



type Props = { setProduct: Function; data: IProduct };

type State = {};

export class Product extends Component<Props, State> {
  state = {};

  render() {
    return <Layout>
      <Card title="Điện thoại" extra={<a href="#">Chi tiết</a>} style={{ width: 330 }}>
      <p>Ảnh</p>
      <p>{this.props.data.name}</p>
      <p>{this.props.data.price}</p>
      <Button type="primary">Mua ngay</Button>
    </Card>
    </Layout>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    productState: state.productState,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setProduct: (data: Array<IProduct>) => dispatch(setProduct(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
