import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Route, Link, withRouter } from "react-router-dom";
import Loader from "../../Components/Loader";
import Markets from "../Markets";
import Exchanges from "../CoinExchanges";

const Title = styled("h1")``;

const Description = styled("p")`
  margin: 30px 0px;
`;

const Row = styled("div")`
  margin-bottom: 5px;
`;

const LeftValue = styled("span")`
  font-weight: 600;
`;

const RightValue = styled("span")``;

const InsideMenu = styled("div")`
  margin: 20px 0px;
`;

const List = styled("ul")`
  display: flex;
`;

const Item = styled("button")`
  width: 100px;
  height: 30px;
  margin-right: 20px;
  padding: 5px;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 600;
  border: 3px solid #00FFFF;
  background-color: ${props => (props.active ? "#00FFFF" : "transparent")};
  color: ${props => (props.active ? "white" : "black")};
`;

const CoinPresenter = withRouter(({ location: { pathname }, loading, coin }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Title>
        {coin.name} / {coin.symbol}
      </Title>
      <Description>{coin.description}</Description>
      <Row>
        <LeftValue>Rank:</LeftValue> <RightValue>{coin.rank}</RightValue>
      </Row>
      <Row>
        <LeftValue>Open Source:</LeftValue> <RightValue>{coin.open_source ? "Yes" : "No"}</RightValue>
      </Row>
      <Row>
        <LeftValue>Proof Type:</LeftValue> <RightValue>{coin.proof_type}</RightValue>
      </Row>
      <Row>
        <LeftValue>Structure:</LeftValue> <RightValue>{coin.org_structure}</RightValue>
      </Row>
      <InsideMenu>
        <List>
          <Item active={pathname === `/coins/${coin.id}/markets`}>
            <Link to={`/coins/${coin.id}/markets`}>Markets</Link>
          </Item>
          <Item active={pathname === `/coins/${coin.id}/exchanges`}>
            <Link to={`/coins/${coin.id}/exchanges`}>Exchanges</Link>
          </Item>
        </List>
      </InsideMenu>
      <Route path="/coins/:id/markets" component={Markets} />
      <Route path="/coins/:id/exchanges" component={Exchanges} />
    </>
  )
);

CoinPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    open_source: PropTypes.bool.isRequired,
    proof_type: PropTypes.string.isRequired,
    org_structure: PropTypes.string.isRequired
  })
};

export default CoinPresenter;
