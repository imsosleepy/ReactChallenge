import React from "react";
import MarketsPresenter from "./MarketsPresenter";
import { coinApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    markets: []
  };
  getMarkets = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const { data: markets } = await coinApi.getCoinsMarkets(id);
      console.log(markets);
      this.setState({ markets });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getMarkets();
  }
  render() {
    return <MarketsPresenter {...this.state} />;
  }
}
