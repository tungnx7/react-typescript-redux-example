import { IProduct, defaultProduct } from "../models/product.model";
import { AxiosInstance } from "../utils/setupAxiosInstance";

export const ACTION_TYPES = {
  PRODUCT: "PRODUCT",
};

interface IAction {
  type: string;
  payload: any;
}

const initialstate: Array<IProduct> = [];

const productReducer = (state = initialstate, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.PRODUCT:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

const getProducts = () => async (dispatch: any) => {
  const data = await AxiosInstance.get("/products");
  dispatch(setProduct(data.data));
};

const createProduct = (product: IProduct) => async (dispatch:any) => {
    const data = await AxiosInstance.post("/products", product);
}

const setProduct = (product: Array<IProduct>) => {
  return {
    type: ACTION_TYPES.PRODUCT,
    payload: product,
  };
};

export { productReducer, setProduct, getProducts, createProduct };
