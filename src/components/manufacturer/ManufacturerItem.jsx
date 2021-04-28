import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const ManufacturerItem = (props) =>{
  const {img_url, num_models, name, id} = props.manufacturer;
    return <div className="card text-center">
        <img src={img_url} style={{maxWidth: '20em', maxHeight: '13em'}}/>
        <h3>{name}</h3>
        <h5>Nombre de models en stock : {num_models}</h5>
        <div>
          <Link to={'/manufacturer/'+id} className="btn btn-dark btn-sm my-1">See More</Link>
        </div>
      </div>;
  }
ManufacturerItem.propTypes = {
  manufacturer: PropTypes.object.isRequired
}

export default ManufacturerItem;
