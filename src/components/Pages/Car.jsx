import React from 'react'
import Spinner from '../Layouts/Spinner'
import {Link} from 'react-router-dom'

export class Car extends React.Component {
    componentDidMount(){
        this.props.getCarById(this.props.match.params.id)
    }
    render() {
    const loading = this.props.loading;
    const { price, year, horsepower, make, model, img_url } = this.props.car;

    if(loading){
      return <Spinner></Spinner>
    }

    return (
     <div className="card text-center">
       <Link to='/'><i class="fas fa-backward"></i>Return to Home</Link>
        <img src={img_url}/>

        <h3>Prix : </h3><p>{price} $</p>
        <h3>Année de construction : </h3><p>{year} </p>
        <h3>Puissance : </h3><p>{horsepower} HP</p>
        <h3>Marque : </h3><p>{make} </p>
        <h3>Modele : </h3><p>{model} </p>

        <h2>Pour toute demande au sujet de ce véhicule veuillez contacter le 06 99 88 00 77</h2>

      </div>
    )
    }
}

export default Car
