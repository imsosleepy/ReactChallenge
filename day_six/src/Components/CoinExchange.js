import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled("div")`
  margin-bottom: 20px;
`;

const Name = styled("span")`
  font-weight: 600;
`;

const Fiats = styled("div")``;

const CoinExchange = ({ id, name, adjusted_volume_24h_share, fiats }) => (
  <Container>
    <Name>{name}</Name>
    <Fiats>Pay On {fiats.map(flat => `${flat.symbol} `)}</Fiats>
  </Container>
);

CoinExchange.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  adjusted_volume_24h_share: PropTypes.number,
  fiats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string
    })
  )
};

export default CoinExchange;
