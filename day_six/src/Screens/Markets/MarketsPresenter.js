import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market";

const MarketsPresenter = ({ loading, markets }) =>
  loading ? (
    <Loader />
  ) : (
    markets
      .filter(market => market.market_url)
      .map((market, index) => (
        <Market
          key={index}
          url={market.market_url}
          name={market.exchange_name}
        />
      ))
  );

MarketsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.array.isRequired
};

export default MarketsPresenter;
