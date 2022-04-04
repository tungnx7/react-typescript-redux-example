import React, { Component } from "react";
import "antd/dist/antd.css";
import LayoutProduct from "./Layout/LayoutProduct";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { setupAxiosIntansce } from "./utils/setupAxiosInstance";

interface Props {}
interface State {
  loading: boolean;
}

declare global {
  interface Window {
    test: any;
  }
}

class App extends Component<Props, State> {
  state = {
    loading: true,
  };

  constructor(props: Props) {
    super(props);
    this.setGlobalWindowVariable();
  }

  componentDidMount = async () => {
    await setupAxiosIntansce(() => {});
    this.setState({ loading: false });
  };

  setGlobalWindowVariable = () => {
    window.test = null;
  };

  render() {
    return (
      <Provider store={store}>
        {this.state.loading ? "Loading..." : <LayoutProduct />}
      </Provider>
    );
  }
}

export default App;
