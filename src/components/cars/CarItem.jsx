import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const CarItem = (props) =>{
  const {img_url, model, price, make, id} = props.car;
    return <div className="card text-center">
        <img src={img_url} style={{maxWidth: '20em', maxHeight: '13em'}}/>
        <h3>{make}  {model}</h3>
        <h5>{price} $</h5>
        <div>
          <Link to={'/car/'+id} className="btn btn-dark btn-sm my-1">See More</Link>
        </div>
      </div>;
  }
CarItem.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarItem;
