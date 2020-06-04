import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  const { name, main } = resultado;
  if (!name) return null;

  // Grados Kelvin
  const kelvin = 273.15;
  return (
    <div className="card-panel white col s12">
      <h2>El clima de {name} es:</h2>
      <p className="temperatura">
        {parseFloat(main.temp - kelvin, 10).toFixed(2)}
        <span>&#x2103;</span>
      </p>
      <p>
        Temperatura M&aacute;xima:
        {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
        <span>&#x2103;</span>
      </p>
      <p>
        Temperatura Mininima:
        {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
        <span>&#x2103;</span>
      </p>
    </div>
  );
};

Clima.propTypes = { resultado: PropTypes.object.isRequired };
export default Clima;
