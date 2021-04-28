import React from "react";
import PropTypes from 'prop-types'
import ManufacturerItem from "../manufacturer/ManufacturerItem";
import Spinner from "../Layouts/Spinner";
import {Link} from 'react-router-dom'


const Manufacturers = ({ manufacturers, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
        
      <div style={manufacturersStyle}>
          <Link to='/'><i class="fas fa-backward"></i>Return to Home</Link>
        {manufacturers.map((manufacturer) => (
          <ManufacturerItem key={manufacturer.name} manufacturer={manufacturer} />
        ))}
      </div>
    );
  }
};
Manufacturers.protoTypes = {
  manufacturers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const manufacturersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Manufacturers;
