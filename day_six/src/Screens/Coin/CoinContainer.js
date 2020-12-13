import React from "react";
import CoinPresenter from "./CoinPresenter";
import { coinApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    coin: null
  };
  getCoin = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    try {
      const { data: coin } = await coinApi.getCoinsDetail(id);
      this.setState({
        coin
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getCoin();
  }
  render() {
    return <CoinPresenter {...this.state} />;
  }
}
