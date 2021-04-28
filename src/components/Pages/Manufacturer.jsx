import React from 'react'
import Spinner from '../Layouts/Spinner'
import Cars from '../cars/Cars'

export class Manufacturer extends React.Component {
    componentDidMount(){
        this.props.getCarsByBrandName(this.props.match.params.name)
    }
    render() {
    const loading = this.props.loading;
    const {img_url, num_models, name} = this.props.manufacturer;

    if(loading){
      return <Spinner></Spinner>
    }

    return (
     <div className="card text-center">
        <img src={img_url}/>

        <h3>Nom de la marque : </h3><p>{name} </p>
        <h3>Nombre de modeles : </h3><p>{num_models} </p>
        <div className="container">
                <Cars cars={this.props.manufacturerCars} loading={this.props.loading}/>  
            </div> 
      </div>
    )
    }
}

export default Manufacturer
