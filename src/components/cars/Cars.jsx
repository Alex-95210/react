import React from "react";
import PropTypes from 'prop-types'
import CarItem from "../cars/CarItem";
import Spinner from "../Layouts/Spinner";

const Cars = ({ cars, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={carStyle}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>
    );
  }
};
Cars.protoTypes = {
  cars: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const carStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Cars;
