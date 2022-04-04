import React, { Component } from 'react'
import { Layout } from 'antd';
import Product from '../components/Product';
import { IProduct } from "../models/product.model";
import { createProduct, getProducts } from '../reducers/productReducer';
import { AxiosInstance } from '../utils/setupAxiosInstance';
import { store } from '../redux/store';
import { connect } from 'react-redux';


const { Header, Footer, Sider, Content } = Layout;

type Props = {
  getProducts: Function,
  productState: Array<IProduct>,
  createProduct: Function
}

type State = {}

class LayoutProduct extends Component<Props, State> {
  state = {}


  componentDidMount = async () => {
    console.log("Component Did Mount")
    this.props.getProducts();
  }

  onAddProduct =  async () => {
    await this.props.createProduct({ name: "Abccsacas0", price: 131321});
    this.props.getProducts();
  }


  render() {

    console.log(this.props.productState)

    return (
        <Layout>
        <Header>Header</Header>
        <Content>
          {this.props.productState.map((item)=> <Product data={item} />)} 
          <button onClick={this.onAddProduct} >Add</button>      
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    productState:state.productState
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
      getProducts: () => dispatch(getProducts()),
      createProduct: (product: IProduct) => dispatch(createProduct(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutProduct);
