import { connect } from "react-redux";
import React, { Component } from "react";
import { setProduct } from "../reducers/productReducer";
import { Layout } from "antd";
import { Card } from "antd";
import { Button } from "antd";
import { IProduct } from "../models/product.model";

const { Header, Footer, Content } = Layout;

type Props = { setProduct: Function; data: IProduct };

type State = {};

export class Product extends Component<Props, State> {
  state = {};

  render() {
    return <Layout>{this.props.data.name}
      {this.props.data.price}
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
