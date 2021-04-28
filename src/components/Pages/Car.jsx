import React from 'react'
import Spinner from '../Layouts/Spinner'

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
        <img src={img_url}/>

        <p>{price}</p>
      </div>
    )
    }
}

export default Car
